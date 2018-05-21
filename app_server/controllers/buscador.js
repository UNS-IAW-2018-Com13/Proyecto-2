
const getBuscador = function (req, res) {
    res.render('buscador');
};

const getCarta = function (req, res) {
    //aca va el codigo para obtener la carta
    //pasar al render como atributo lo necesario.
    res.render('buscador',{atributo:""});
};

module.exports = {
    getBuscador, getCarta
};