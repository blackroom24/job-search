const express = require('express');

const aboutRouter = express.Router();

aboutRouter.get('/about', (req, res) => {
  res.send('About Page');
});

module.exports = aboutRouter;
