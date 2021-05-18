const express = require('express');
const axios = require('axios');
const { BASE_URL } = require('../config');

const router = express.Router();

router.get('/search', async (req, res) => {
  const { description, location } = req.query;
  if (description === '' && location === '') {
    return false;
  } else {
    try {
      const { data } = await axios.get(
        `${BASE_URL}?description=${description}&location=${location}`,
      );
      res.render('index.ejs', { jobs: data });
    } catch (err) {
      let errorStatus = err.response.status;
      res.render('error.ejs', { error: errorStatus });
    }
  }
});

module.exports = router;
