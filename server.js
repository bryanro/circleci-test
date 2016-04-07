#!/bin/env node

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var http = require('http');
var morgan = require('morgan');
var logger = require('winston');

logger.level = 'info';

var app = express();

var port = process.env.PORT || 3000;

app.set('port', port);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/hello', function (req, res, next) {
    res.status(200).send('hello world!');
});

var server = app.listen(app.get('port'), function() {
    logger.info('Starting version ' + process.env.npm_package_version);
    logger.info('Express server listening on port ' + server.address().port);
});

module.exports = app;
