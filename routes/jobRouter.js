const express = require("express");

const axios = require("axios");

const jobRouter = express.Router();

const BASE_URL = "https://jobs.github.com/positions.json";

jobRouter.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}?description=React`);
    res.render("index", { jobs: data });
  } catch (err) {
    console.log(err);
    // TODO render ERROR PAGE
  }
});

jobRouter.get("/search", async (req, res) => {
  const { description, location } = req.query;
  if (description === "" && location === "") {
    return false;
    // TODO render empty search results or display error page
    // TODO additionally can implement form validation
  } else {
    try {
      const { data } = await axios.get(
        `${BASE_URL}?description=${description}&location=${location}`,
      );
      res.render("index", { jobs: data });
    } catch (err) {
      console.log(err);
      // TODO render ERROR PAGE
    }
  }
});

module.exports = jobRouter;
