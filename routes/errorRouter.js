const express = require('express');
const errorRouter = express.Router();

errorRouter.get('/:slug', (req, res) => {
  const error = req.constants.ERROR_STATUS;
  res.render('error.ejs', { error: error });
});
module.exports = errorRouter;
