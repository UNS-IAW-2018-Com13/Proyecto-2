/* GET home page */
const index = function(req, res) {
  res.render('index', { title: 'Inicio' });
};

module.exports = {
  index
};