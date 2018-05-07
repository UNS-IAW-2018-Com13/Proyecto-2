const mongoose = require('mongoose');
const Jugador = mongoose.model('Jugador');
const Mazo = mongoose.model('Mazo');
const Usuario = mongoose.model('Usuario');

const getJugadores = function (req, res) {
    Jugador.find().exec((err, jugadores) => {
        if (err) {
            res.status(404).json(err);
        } else {
            Mazo.find().exec((err, mazos) => {
                if (err) {
                    res.status(404).json(err);
                } else {
                    res.render('jugadores', {jugadores: jugadores, mazos: mazos, claseMazo1:"", claseMazo2:"", claseMazo3:""});
                }
            });
        }
    });
};

const setFavorito = function (req, res) {
	Usuario.update({id: req.user.id}, {usuario: req.user.username, pizzas: req.body.pedido}, 
			{upsert: true, setDefaultsOnInsert: true}, (err, pedido) => {
				if (err) { 
					res
						.status(400)
						.json(err);    
	        	} else {
					res
						.status(201)
						.json(pedido);
				}
			})
}


module.exports = {
    getJugadores
};