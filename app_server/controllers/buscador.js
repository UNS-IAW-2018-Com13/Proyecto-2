var unirest = require('unirest');

const getBuscador = function (req, res) {
    res.render('buscador');
};

const getCarta = function (req, res) {
    //res.json({respuesta: req.body.carta});
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/" + req.body.carta + "?collectible=1")
            .header("X-Mashape-Key", "XYu7lgC3UMmshNKUwUmcIw48rD0xp11uZRujsnqGSS9xjgT1gz")
            .end(function (result) {
                for (var i = result.body.length-1; i>=0; i--)
                    if (!(result.body[i].hasOwnProperty("cost")))
                        delete result.body[i];
                //console.log(result.status, result.headers, result.body);
                res.json(result.body);
            });
    //aca va el codigo para obtener la carta
    //pasar al render como atributo lo necesario.
    //res.render('buscador', result.body);
};

module.exports = {
    getBuscador, getCarta
};