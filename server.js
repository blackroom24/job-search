const express = require('express');
const aboutRouter = require('./routes/aboutRouter');
const jobRouter = require('./routes/jobRouter');
const errorRouter = require('./routes/errorRouter');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', jobRouter);
app.get('/about', aboutRouter);
app.get(
  '/:slug',
  (req, res, next) => {
    req.constants = {
      errorStatusCode: 404,
    };
    next();
  },
  errorRouter,
);

app.listen(PORT, console.log(`Server running on ${PORT}`));
