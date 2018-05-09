const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getIndex = function (req, res) {
    res.render('index');
};

const postIndex = function (req, res) {

    /*
     Usuario.update({idUser: req.body.idUser}, {idUser: req.body.idUser, estilo: "Standard", favoritos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]},
     {upsert: true, setDefaultsOnInsert: true}, (err, resultado) => {
     if (err) {
     res.status(400).json(err);
     } else {
     res.status(201).json(resultado);
     }
     });
     */
    Usuario.findOne({idUser: req.body.idUser}, function (err, usr) {
        if (err) {
            usr.idUser = req.body.idUser;
            usr.save();
        } else {
            res.send(usr);
        }
    });

};

module.exports = {
    getIndex, postIndex
};