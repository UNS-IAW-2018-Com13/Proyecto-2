/* GET home page */
const index = function(req, res) {
  res.render('partidos', { title: 'Partidos' });
};

module.exports = {
  index
};