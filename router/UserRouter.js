// This Module is use for Authentication and Room Managment

const express = require("express");
const UserModel = require("../model/UserModel");
const UserRouter = express.Router();

UserRouter.post("/auth", async (req, res) => {
  try {
    console.log("User ID : ", req.body.userId);
    console.log("Pass : ", req.body.password);
    const a = await UserModel.find({
      $and: [{ userId: req.body.userId }, { password: req.body.password }],
    });
    console.log(a);
    res.send(a);
  } catch (e) {
    console.log(e);
  }
});

// User Can add Rooms By this API
UserRouter.post("/addRoom", async (req, res) => {
  if (req.body == null) {
    res.status(500).send("ERROR");
  }
  try {
    const { _id, room, val } = req.body;
    UserModel.findByIdAndUpdate({ _id }, { $set: { [room]: val } }).then(
      (v) => {
        res.send(v);
      }
    );
  } catch (error) {
    res.send(error);
  }
});

// User can remove Roomes By this API
UserRouter.post("/deleteRoom", async (req, res) => {
  if (req.body == null) {
    res.status(500).send("ERROR");
  }
  const { _id, room } = req.body;
  try {
    UserModel.findByIdAndUpdate({ _id }, { $unset: { [room]: 1 } }).then(
      (v) => {
        res.send(v);
      }
    );
  } catch (error) {
    res.send(error);
  }
});

//User Can Rename the Room Name By this Api
UserRouter.post("/reanameRoom", async (req, res) => {
  if (req.body == null) {
    res.status(500).send("ERROR");
  }
  const { _id, room, newRoom } = req.body;
  UserModel.findByIdAndUpdate({ _id }, { $rename: { [room]: `${newRoom}` } })
    .then((v) => {
      res.send(v);
    })
    .catch((e) => {
      res.send(e + "EROROR");
    });
});
module.exports = UserRouter;
