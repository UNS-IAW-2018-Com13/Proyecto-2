const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getIndex = function (req, res) {
    if(req.user){
       Usuario.findOne({'id': req.user.id}, (err, resultado) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.render('index',{usuario: req.user});
            }
        });
    }else{
        res.render('index');
    }
};

module.exports = {
    getIndex
};