const express = require('express');
const axios = require('axios');
const router = express.Router();
const {
  BASE_PARAMS,
  BASE_URL,
  HOME,
  APP_ID,
  APP_KEY,
  CURRENCY,
  COUNTRY,
} = require('../config');

let location = 'mumbai';
let description = 'python';
const URL = `${BASE_URL}/${COUNTRY}/${BASE_PARAMS}&${HOME}&app_id=${APP_ID}&app_key=${APP_KEY}&what=${description}&where=${location}`;

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(URL);
    const { results } = data;
    res.render('index.ejs', {
      jobs: results,
      currency: CURRENCY,
      title: 'Featured',
    });
  } catch (err) {
    let errorStatus = err.response.status;
    res.render('error.ejs', { error: errorStatus });
  }
});
module.exports = router;
