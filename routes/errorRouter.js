const express = require('express');
const errorRouter = express.Router();

errorRouter.get('/:slug', (req, res) => {
  const error = req.constants.errorStatusCode;
  res.render('error', { error: error });
});
module.exports = errorRouter;
