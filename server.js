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

app.get('/', homeRouter);
app.get('/test', (req, res) => {
  res.render('index_test_1.ejs');
});
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
