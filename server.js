const express = require('express');
const aboutRouter = require('./routes/aboutRouter');
const jobRouter = require('./routes/jobRouter');
const searchRouter = require('./routes/searchRouter');
const errorRouter = require('./routes/errorRouter');
const { PORT, PAGE_NOT_FOUND } = require('./config');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.get('/', jobRouter);
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
