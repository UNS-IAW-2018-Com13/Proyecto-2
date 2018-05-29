var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var Usuario = require('../models/usuarios');

passport.use(new FacebookStrategy({
    clientID: "177693619614275",
    clientSecret: "976e401b1f54e23d407c91455defb64a",
    callbackURL: 'https://torneo-hs.herokuapp.com/auth/facebook/callback',
    profileFields: ['id', 'email', 'name']
}, function (token, refreshToken, profile, done) {
    // asynchronous
    process.nextTick(function () {
        // find the user in the database based on their facebook id
        Usuario.findOne({'id': profile.id}, function (err, user) {
            // if there is an error, stop everything and return that
            // ie an error connecting to the database
            if (err)
                return done(err);
            // if the user is found, then log them in
            if (user) {
                return done(null, user); // user found, return that user
            } else {
                // if there is no user found with that facebook id, create them
                var newUser = new User();
                // set all of the facebook information in our user model
                newUser.id = profile.id; // set the users facebook id                   
                newUser.token = token; // we will save the token that facebook provides to the user                    
                newUser.nombre = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                newUser.mail = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                newUser.estilo = 'Standard';
                newUser.favoritos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                // save our user to the database
                newUser.save(function (err) {
                    if (err)
                        throw err;
                    // if successful, return the new user
                    return done(null, newUser);
                });
            }

        });
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

const login_facebook = passport.authenticate('facebook', {scope : ['public_profile', 'email']});

const login_facebook_failure = passport.authenticate('facebook', {failureRedirect : '/'});

const login_facebook_cb = function(req, res) {
  res.redirect('/');
};

module.exports = {
    login_facebook, login_facebook_failure, login_facebook_cb
};



/*

const logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

function estaLogueado(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
        return next();
    } else {
        // if they aren't redirect them to the home page
        res.redirect('/');
    }
}

const guardarUsuario = function (req, res) {
    Usuario.update({'userID': req.body.userID}, {'userID': req.body.userID},
            {upsert: true, setDefaultsOnInsert: true}, (err, resultado) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(resultado);
        }
    });
};

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