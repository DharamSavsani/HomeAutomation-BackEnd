const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const connectToAtlas = require("./db");
var cors = require("cors");
const UserRouter = require("./router/UserRouter");
connectToAtlas();


app.use(cors());
app.use(bodyParser.json());
app.use(UserRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
