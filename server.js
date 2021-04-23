const express = require("express");

const app = express();

const PORT = 3000;

app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Testing");
});
app.listen(PORT, console.log(`Server running on ${PORT}`));
