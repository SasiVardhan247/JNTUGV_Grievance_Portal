const admin = require('../models/adminModel');
const { createAccessToken } = require("../utils/tokens");

exports.login = async (req, res) => {
    try {
      const { password } = req.body;
      user = await admin.find({})
        
      const isMatch = () => {
        return password == user.password
      };

      if (!isMatch)
        return res
          .status(400)
          .json({ status: false, msg: "Password incorrect!!" });
      const token = createAccessToken({ id: user._id });
      res
        .status(200)
        .json({
          token,
          status: true,
          msg: "Login Successful ...",
        });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: false, msg: "Internal Server Error" });
    }
  };