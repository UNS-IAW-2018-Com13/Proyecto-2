const getIndex = function (req, res) {
    res.render('index');
};

const getIndexLogueado = function (req, res) {
    console.log("Index con usuario: " + req.user.estilo);
    res.redirect('index',{usuario: req.user});
};

module.exports = {
    getIndex, getIndexLogueado
};