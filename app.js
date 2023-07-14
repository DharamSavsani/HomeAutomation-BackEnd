/*
 Devlpoed By : Dharam Savsani
-----> This whole project is clone of a Android App which devloped in Android By Me.
-----> This project is made for Home Management System. 
*/

const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const connectToAtlas = require("./db");
var cors = require("cors");
const UserRouter = require("./router/UserRouter");
const RoomRouster = require("./router/UserRouter");
const DeviceRouter = require("./router/DeviceRouter");
connectToAtlas();

app.use(cors());
app.use(bodyParser.json());
app.use(UserRouter);
app.use(RoomRouster);
app.use(DeviceRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
