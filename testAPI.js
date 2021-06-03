const express = require('express');
const aboutRouter = require('./routes/aboutRouter');
const adHome = require('./routes/adHome');
const adSearch = require('./routes/adSearch');
const errorRouter = require('./routes/errorRouter');
const { PORT, PAGE_NOT_FOUND } = require('./config');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));
app.use('/', express.static('public/img'));
app.use('/', express.static('public/css'));

app.get('/', adHome);
app.get('/about', aboutRouter);
app.get('/search', adSearch);
app.get(
  '/:slug',
  (req, res, next) => {
    req.constants = {
      ERROR_STATUS: PAGE_NOT_FOUND,
    };
    next();
  },
  errorRouter,
);
app.listen(PORT, console.log('SERVER IS RUNNING'));
