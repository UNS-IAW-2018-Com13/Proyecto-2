var unirest = require('unirest');
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const getBuscador = function (req, res) {
    if (req.user) {
        Usuario.findOne({'id': req.user.id}, (err, resultado) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.render('buscador', {usuario: resultado});
            }
        });
    } else {
        res.render('buscador');
    }
};

const getCarta = function (req, res) {
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/" + req.body.carta + "?collectible=1")
            .header("X-Mashape-Key", "XYu7lgC3UMmshNKUwUmcIw48rD0xp11uZRujsnqGSS9xjgT1gz")
            .end(function (result) {
                if (result.error !== false) {
                    err = new Object();
                    err.error = 'Criterio de busqueda incorrecto: No existen cartas que concuerden con: ' + res.req.body.carta;
                    res.json(err);
                } else {
                    var sres = new Array();
                    for (var i = result.body.length - 1; i >= 0; i--)
                        if (result.body[i].hasOwnProperty("cost"))
                            sres.push(result.body[i]);
                    res.json(sres);
                }
            });
};

module.exports = {
    getBuscador, getCarta
};