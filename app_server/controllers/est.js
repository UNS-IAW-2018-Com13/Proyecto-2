/* GET home page */
const index = function(req, res) {
  res.render('estadisticas', { title: 'Estadisticas' });
};

module.exports = {
  index
};