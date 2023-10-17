const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const grievanceModel = new Schema(
    {
        grievancePostingTime : {
            type: Date,
            default: Date.now,
        },
        grievanceResponseTime : {
            type: Date,
        },
        title:{
            type:String,
            required:true,
        },
        grievance : {
            type: String,
            required : true,
        },
        grievanceReply :{
            type: String,
        }
    },
    { timestamp: true }
);

const grievances = new model("grievances",grievanceModel);

module.exports = grievances;