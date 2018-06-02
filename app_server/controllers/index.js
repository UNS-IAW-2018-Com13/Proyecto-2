const getIndex = function (req, res) {
    res.render('index');
};

const getIndexLogueado = function (req, res) {
    res.render('index',{usuario: req.user});
};

module.exports = {
    getIndex, getIndexLogueado
};