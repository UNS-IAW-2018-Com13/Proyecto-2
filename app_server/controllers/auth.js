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

const login_facebook_cb = passport.authenticate('facebook', {successRedirect : '/logueado', failureRedirect : '/'});

const logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

function estaLogueado(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("Usuario logueado.");
        return next();
    } else {
        console.log("Usuario no logueado.");
        res.redirect('/');
    }
}

const getIndexLogueado = function (req, res) {
    console.log("Index con usuario: " + req.user.estilo);
    res.render('index',{usuario: req.user});
};

module.exports = {
    login_facebook, login_facebook_cb, logout, estaLogueado, getIndexLogueado
};