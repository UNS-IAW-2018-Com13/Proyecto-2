const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const guardarEstilo = function (req, res) {
    if (req.user) {
        Usuario.update({'id': req.user.id}, {'estilo': req.body.estilo}, (err, resultado) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(resultado);
            }
        });
    } else {
        res.json({msj: "null"});
    }

};

const cargarEstilo = function (req, res) {
    if (req.user) {
        Usuario.findOne({'id': req.user.id}, (err, resultado) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json({'estilo': resultado.estilo});
            }
        });
    } else {
        res.json({msj: "null"});
    }

};

module.exports = {
    guardarEstilo, cargarEstilo
};