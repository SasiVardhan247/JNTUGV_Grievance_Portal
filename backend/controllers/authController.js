const admin = require('../models/adminModel');
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const { createAccessToken } = require("../utils/tokens");
let id;
const transporter = nodemailer.createTransport({
  service:'Gmail',
  auth:{
      user:process.env.AUTH_EMAIL,
      pass:process.env.AUTH_PASS
    },
});
exports.login = async (req, res) => {
    try {
      const { password } = req.body.params;
      user = await admin.find({})
      if (password !== user[0].password)
        return res
          .status(400)
          .json({ status: false, msg: "Password incorrect!!" });
      id = user._id;

      const otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });

      const mailOptions = {
          from: process.env.AUTH_EMAIL,
          to: process.env.RGST_EMAIL,
          subject: "JNTUGV-Grievance",
          html: `<p>Enter OTP <b>${otp}</b> to Login</p>`,
      };

      const hashedotp = await bcrypt.hash(otp, 10);
      req.app.locals.OTP = hashedotp;
      console.log("otp",otp)
      // transporter.sendMail(mailOptions, (err, info) => {
      //     if (err) {
      //       console.log("err", err);
      //       console.log(info.messageId);
      //     }
      // });

      res
        .status(200)
        .json({
          status: true,
          msg: "OTP sent ...",
        });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ status: false, msg: "Internal Server Error" });
      }
    };
    
exports.verify =async(req,res)=>{
  try{
    const { finalOtp } = req.body.params;
    const result = await bcrypt.compare(finalOtp, req.app.locals.OTP);
    if(result){
      const token = createAccessToken({ id: user._id });
      // req.app.locals.OTP = null;
      res.status(200).json({ status: true,token, msg:"Logging in ... Please wait"});;
    }else {
      res.status(400).json({ status: false, msg: "otp mismatched" });
    }
  }catch(err){
    console.log(err)
    return res
      .status(500)
      .json({ status: false, msg: "Internal Server Error" });
}
}