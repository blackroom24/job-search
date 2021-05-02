const express = require('express');

const axios = require('axios');

const jobRouter = express.Router();

const BASE_URL = 'https://jobs.github.com/positions.json';

jobRouter.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?description=React`);
    res.render('index', { jobs: data });
  } catch (error) {
    res.render('errorPage', { error: error.response.status });
  }
});

jobRouter.get('/search', async (req, res) => {
  const { description, location } = req.query;
  if (description === '' && location === '') {
    return false;
    /*
    TODO
    render empty search results or display error page
     */
  } else {
    try {
      const { data } = await axios.get(
        `${BASE_URL}?description=${description}&location=${location}`,
      );
      res.render('index', { jobs: data });
    } catch (error) {
      res.render('errorPage', { error: error.response.status });
    }
  }
});

module.exports = jobRouter;
