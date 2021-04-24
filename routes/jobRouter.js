const express = require('express');

const axios = require('axios');

const jobRouter = express.Router();

const BASE_URL = 'https://jobs.github.com/positions.json';

jobRouter.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?description=React`);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = jobRouter;
