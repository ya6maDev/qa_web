const express = require('express');

const expressReactView = require('express-react-views');

const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');

const path = require('path');

/* const favicon = require('serve-favicon'); */

/* const logger = require('morgan'); */

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

const search = require('./server/serach/search');

const login = require('./server/user/login/login');

const loginAdd = require('./server/user/loginAdd/loginAdd');

const add = require('./server/add/add');

const config = require('./webpack.config');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jsx');

app.set('port', (process.env.PORT || 3000));

app.engine('jsx', expressReactView.createEngine());

// uncomment after placing your favicon in /public

/* app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); */

/* app.use(logger('dev')); */

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, './public')));

app.use('/', express.static('./public'));

app.use('/qa/search', express.static('./public'));

app.use('/qa/search/answer', search);

app.use('/qa/add/:action', express.static('./public'));

app.use('/qa/add/action', add);

app.use('/qa/detail', express.static('./public'));

app.use('/user/login', express.static('./public'));

app.use('/user/login/action', login);

app.use('/user/loginAdd', express.static('./public'));

app.use('/user/loginAdd/action', loginAdd);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res /* , next */) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const devPort = 3001;

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, config.devServer);

devServer.listen(devPort, () => {
    console.log('起動しました', `http://localhost:${devPort}`);
});

app.listen(app.get('port'), () => {
    console.log('起動しました', `http://localhost:${app.get('port')}`);
});

module.exports = app;
