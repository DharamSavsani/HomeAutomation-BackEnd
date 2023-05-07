const mongoose = require("mongoose");

const connectToAtlas = () => {
  mongoose
    .connect(
      "mongodb+srv://Dharam:Ds%4012345@homeautomation.axs1ij1.mongodb.net/HomeAutomtion?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Done");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectToAtlas;
