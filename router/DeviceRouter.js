// This Module is use to Device Management.

const express = require("express");
const DeviceRouter = express.Router();
const UserModel = require("../model/UserModel");

//User can add Device using this API
DeviceRouter.post("/addDevice", async (req, res) => {
  const { _id, room, val } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id },
      { $set: { [room]: val } }
    );
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

// User can retrive data of Devices and also use for other varification
DeviceRouter.post("/getStatus", async (req, res) => {
  const _id = req.body._id;
  const user = await UserModel.find({ _id })
    .then((v) => {
      res.send(v);
    })
    .catch((e) => {
      res.send(e);
    });
});
module.exports = DeviceRouter;
