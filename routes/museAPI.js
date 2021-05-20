const axios = require('axios');
const express = require('express');
const { MUSE_URL, BASE_PARAMS, API_KEY } = require('../config');
const router = express.Router();

router.get('/', async (req, res) => {
  const { data } = await axios.get(
    `${MUSE_URL}?page=1&api_key=${API_KEY}&${BASE_PARAMS}`,
  );
  const { results } = data;
  res.render('testtwo.ejs', { jobs: results });
});
module.exports = router;
