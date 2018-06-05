const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const guardarEstilo = function (req, res) {
    if (req.user) {
        Usuario.update({'id': req.user.id}, {'estilo': req.body.estilo}, (err, usr_up) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201);
            }
        });
    } else {
        res.json({msj: "usuario_no_logueado"});
    }

};

module.exports = {
    guardarEstilo
};