const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getIndex = function (req, res) {
    res.render('index');
};

const postUsuario = function (req, res) {
    Usuario.update({idUser: req.body.idUser}, {idUser: req.body.idUser},
            {upsert: true, setDefaultsOnInsert: true}, (err, resultado) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(resultado);
        }
    });
};

const getUsuario = function (req, res) {
    Usuario.find({idUser: req.body.idUser}).exec((err, usuarios) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.send({usuario: usuarios});
        }
    });
};

module.exports = {
    getIndex, postUsuario, getUsuario
};