const { Schema, model } = require("mongoose");

const adminModel = new Schema(
    {
        password: {
            type:String,
            required:true,
        }
    },
    { timestamp: true }
);

const admin = new model('admin',adminModel);

module.exports = admin;