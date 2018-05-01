/* GET home page */
const index = function(req, res) {
  res.render('index', { title: 'Jugador' });
};

module.exports = {
  index
};