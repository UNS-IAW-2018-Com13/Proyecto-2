var unirest = require('unirest');


const getEstadisticas = function (req, res) {
    res.render('estadisticas');
};

const getCartas = function (req, res) {
    unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/"+req.body.nombre+"?collectible=1")
            .header("X-Mashape-Key", "XYu7lgC3UMmshNKUwUmcIw48rD0xp11uZRujsnqGSS9xjgT1gz")
            .end(function (result) {
                console.log(result.status, result.headers, result.body);
                res.send({"algo": "nfjfjfj"});
            });
};




module.exports = {
    getEstadisticas, getCartas
};