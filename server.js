const express = require('express');
const aboutRouter = require('./routes/aboutRouter');
const jobRouter = require('./routes/jobRouter');

const app = express();

const PORT = 3000;

app.use('/', express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', jobRouter);
app.get('/about', aboutRouter);

app.listen(PORT, console.log(`Server running on ${PORT}`));
