require('dotenv').config();
const express = require('express');

const aboutRoute = require('./routes/aboutRoute');
const homeRoute = require('./routes/homeRoute');
const searchRoute = require('./routes/searchRoute');
const errorRoute = require('./routes/errorRoute');

const { PORT, PAGE_NOT_FOUND } = require('./config');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));
app.use('/', express.static('public/img'));
app.use('/', express.static('public/css'));

app.get('/', homeRoute);
app.get('/about', aboutRoute);
app.get('/search', searchRoute);
app.get(
  '/:slug',
  (req, res, next) => {
    req.constants = {
      ERROR_STATUS: PAGE_NOT_FOUND,
    };
    next();
  },
  errorRoute,
);

app.listen(PORT, console.log('SERVER IS RUNNING'));
