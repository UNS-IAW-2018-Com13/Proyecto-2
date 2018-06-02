const getIndex = function (req, res) {
    if(req.user){
       res.render('index',{usuario: req.user}); 
    }else{
        res.render('index');
    }
};

module.exports = {
    getIndex
};