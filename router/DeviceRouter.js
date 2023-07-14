// This Module is use to Device Management.

const express = require("express");
const DeviceRouter = express.Router();
const UserModel = require("../model/UserModel");

//User can add Device using this API
DeviceRouter.post("/addDevice", async (req, res) => {
  const { _id, room, val } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate({ _id }, { $set: {[room] : val} });
    res.send(user);
  } catch (error) {
    res.send(error)
  }
});

module.exports = DeviceRouter;
