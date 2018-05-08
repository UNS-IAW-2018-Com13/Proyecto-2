const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getIndex = function (req, res) {
    res.render('index');
};

const postIndex = function (req, res) {
    Pedido.update({id: req.body.id},
            {id: req.body.id, nombre: req.body.nombre, estilo: "Standard", favoritos: [1, 2, 3]},
            {upsert: true, setDefaultsOnInsert: true}, (err, pedido) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(pedido);
        }
    });
};

module.exports = {
    getIndex, postIndex
};