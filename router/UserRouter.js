const express = require("express");
const UserModel = require("../model/UserModel");
const UserRouter = express.Router();

UserRouter.post("/auth", async (req, res) => {
  try {
    console.log("User ID : " ,req.body.userId);
    console.log("Pass : " ,req.body.password);
    const a = await UserModel.find({
      $and: [{ userId: req.body.userId }, { password: req.body.password }],
    });
    console.log(a);
    res.send(a);
  } catch (e) {
    console.log(e);
  }
});

UserRouter.get('/',(req,res)=>{
  res.send("this iS Done");
})

module.exports = UserRouter;
