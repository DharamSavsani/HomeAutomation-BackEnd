// This Module is use to Device Management.

const express = require("express");
const DeviceRouter = express.Router();
const UserModel = require("../model/UserModel");

//User can add, delete, and set the Device using this API
DeviceRouter.post("/addDevice", async (req, res) => {
  const { _id, room, val } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id },
      { $set: { [room]: val } }
    );
    delete user.password;
    delete user._id;
    delete user.userId;
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

// User can retrive data of Devices and also use for other varification
DeviceRouter.post("/getStatus", async (req, res) => {
  try {
    const _id = req.body._id;
    const user = await UserModel.find({ _id }).lean().exec();
    delete user.password;
    delete user._id;
    delete user.userId;
    res.send(user);
  } catch (e) {
    console.log("Error in getting device status", e);
    res.send(e);
  }
});
module.exports = DeviceRouter;
