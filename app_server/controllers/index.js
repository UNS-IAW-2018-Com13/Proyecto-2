const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getIndex = function (req, res) {
    res.render('index');
};

const postUsuario = function (req, res) {
    Usuario.update({'userID': req.body.userID}, {'userID': req.body.userID},
            {upsert: true, setDefaultsOnInsert: true}, (err, resultado) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(resultado);
        }
    });
};

const getUsuario = function (req, res) {
    Usuario.findOne({'userID': req.body.userID}).exec((err, usr) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.json({usuario: usr, consulta: req.body.userID});
        }
    });
};

module.exports = {
    getIndex, postUsuario, getUsuario
};