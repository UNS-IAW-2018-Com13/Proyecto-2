const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
require('./app_server/models/db');

const indexRouter = require('./app_server/routes/index');
const jugadoresRouter = require('./app_server/routes/jugadores');
const gruposRouter = require('./app_server/routes/grupos');
const partidosRouter = require('./app_server/routes/partidos');
const buscadorRouter = require('./app_server/routes/buscador');
const authRouter = require('./app_server/routes/auth');
const estadisticasRouter = require('./app_server/routes/estadisticas');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
    secret: 'torneo-hs-secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/jugadores', jugadoresRouter);
app.use('/grupos', gruposRouter);
app.use('/partidos', partidosRouter);
app.use('/buscador', buscadorRouter);
app.use('/estadisticas', estadisticasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;