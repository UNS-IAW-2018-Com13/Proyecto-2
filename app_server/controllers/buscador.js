
const getBuscador = function (req, res) {
    res.render('buscador');
};

const getCarta = function (req, res) {
    res.json({respuesta: req.body.carta});
};

module.exports = {
    getBuscador, getCarta
};