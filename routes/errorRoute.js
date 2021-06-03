const express = require('express');

const router = express.Router();

router.get('/:slug', (req, res) => {
  const error = req.constants.ERROR_STATUS;
  res.render('error.ejs', { error: error });
});

module.exports = router;
