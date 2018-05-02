/* GET home page */
const index = function(req, res) {
  res.render('jugadores', { title: 'Jugadores' });
};

module.exports = {
  index
};