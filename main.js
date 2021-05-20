const express = require('express');
const aboutRouter = require('./routes/aboutRouter');
const { PORT, PAGE_NOT_FOUND } = require('./config');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/about', aboutRouter);

app.listen(PORT, console.log(`Server running on ${PORT}`));
