const express = require('express');
const axios = require('axios');
const {
  BASE_URL,
  BASE_PARAMS,
  APP_ID,
  APP_KEY,
  COUNTRY,
  RESULTS,
} = require('../config');
const router = express.Router();

router.get('/search', async (req, res) => {
  const { description, location } = req.query;
  const URL = `${BASE_URL}/${COUNTRY}/${BASE_PARAMS}&${RESULTS}&app_id=${APP_ID}&app_key=${APP_KEY}&what=${description}&where=${location}`;
  if (description === '' && location === '') {
    return false;
  } else {
    try {
      const { data } = await axios.get(URL);
      const { results } = data;
      res.render('test.ejs', {
        jobs: results,
        title: 'Search Results',
        currency: COUNTRY,
      });
    } catch (err) {
      let errorStatus = err.response.status;
      res.render('error.ejs', { error: errorStatus });
    }
  }
});

module.exports = router;
