const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");

exports.verifyToken = async(req, res, next) => {
    const token = req.header("Authorization");
    // const token = req.header("Authorization").split(' ')[1];
    if (!token) return res.status(400).json({ status: false, msg: "Token not found" });
    let admin;
    try {
      admin = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    }
    catch (err) {
      return res.status(401).json({ status: false, msg: "Invalid token" });
    }
  
    try {
      admin = await Admin.find({});
      if (!admin) {
        return res.status(401).json({ status: false, msg: "Admin not found" });
      }
      
      req.admin = admin;
      next();
    }
    catch (err) {
      console.error(err);
      res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
    
};