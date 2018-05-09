const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getIndex = function (req, res) {
    res.render('index');
};

const postIndex = function (req, res) {
    Usuario.update({idUser: req.body.id},
            {upsert: true, setDefaultsOnInsert: true}, (err, resultado) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.send({estilo: "Standard", favoritos: [1, 2, 3]});
        }
    });
};

module.exports = {
    getIndex, postIndex
};