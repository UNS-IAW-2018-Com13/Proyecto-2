/* GET home page */
const index = function(req, res) {
  res.render('grupos', { title: 'Grupos' });
};

module.exports = {
  index
};