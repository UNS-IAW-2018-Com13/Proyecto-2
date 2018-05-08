const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getIndex = function (req, res) {
    res.render('index');
};

const postIndex = function (req, res) {
    var idU = req.body.id;
    var nomU = req.body.nombre;
    Usuario.findOne({"id": idU}).exec((err, res) => {
        if (err) {
            res.status(404).json(err);
        }
    });
    console.log(res);
    if (res === null) {
        var user = new Usuario({"id": idU, "nombre": nomU, "estilo": "asd", "favoritos": [1, 2, 3]});

        user.save(function (err, res) {
            if (err)
                return console.error(err);
            console.log("guardo en DB" + idU + " " + nomU);
        });
    }

    res.send("");
};

module.exports = {
    getIndex, postIndex
};