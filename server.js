const express = require('express');

const homeRouter = require('./routes/homeRouter');
const searchRouter = require('./routes/searchRouter');
const aboutRouter = require('./routes/aboutRouter');
const errorRouter = require('./routes/errorRouter');

const { PORT, PAGE_NOT_FOUND } = require('./config');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));
app.use('/', express.static('public/img'));
app.use('/', express.static('public/css'));

app.get('/', homeRouter);
app.get('/search', searchRouter);
app.get('/about', aboutRouter);
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

app.listen(PORT, console.log(`Server running on ${PORT}`));
