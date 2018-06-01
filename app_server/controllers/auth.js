var passport = require('passport');
var Usuario = require('../models/usuarios');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: "177693619614275",
    clientSecret: "976e401b1f54e23d407c91455defb64a",
    callbackURL: 'https://torneo-hs.herokuapp.com/auth/facebook/callback',
    profileFields: ['id', 'name', 'email']
}, function (token, refreshToken, profile, done) {
    process.nextTick(function () {
        Usuario.findOne({'id': profile.id}, function (err, user) {
            if (err){
                return done(err);
            }
            if (user) {
                return done(null, user);
            } else {
                var newUser = new Usuario();
                newUser.id = profile.id;                  
                newUser.token = token;                    
                newUser.nombre = profile.name.givenName + ' ' + profile.name.familyName;
                newUser.mail = profile.emails[0].value;
                newUser.estilo = 'Standard';
                newUser.favoritos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                newUser.save(function (err) {
                    if (err){
                        throw err;
                    }
                    return done(null, newUser);
                });
            }
        });
    });
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

const login_facebook = passport.authenticate('facebook', {scope: ['email']});

const login_facebook_failure = passport.authenticate('facebook', {failureRedirect: '/'});

const login_facebook_cb = function(req, res) {
  res.redirect('/');
};

const logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

function estaLogueado(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.json({msj:"no_logueado"});
    }
}

const guardarEstilo = function (req, res) {
    Usuario.update({'id': req.user.id}, {'estilo': req.body.estilo}, (err, resultado) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(resultado);
        }
    });
};

const cargarEstilo = function (req, res) {
    Usuario.findOne({'id': req.user.id}, (err, resultado) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json({'estilo': resultado.estilo});
        }
    });
};

module.exports = {
    login_facebook, login_facebook_failure, login_facebook_cb, logout, estaLogueado, guardarEstilo, cargarEstilo
};



/*







const getUsuario = function (req, res) {
    Usuario.findOne({'userID': req.body.userID}).exec((err, usr) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.json({estilo: usr.estilo, favoritos: usr.favoritos});
        }
    });
};

 */