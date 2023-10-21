const { Schema, model } = require("mongoose");

const grievanceModel = new Schema(
    {
        applicationNumber :{
            type : String,
            required:true,
        },
        acknoledgementId:{
            type:String,
            unique: true,
        },
        fullName :{
            type : String,
            required:true,
        },
        email :{
            type: String,
            required:true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        aadharNumber : {
            type: String,
            required: true,
        },
        grievanceCategory : {
            type : String,
            required : true,
        },
        grievancePostingTime : {
            type: Date,
            default: Date.now,
        },
        grievanceResponseTime : {
            type: Date,
        },
        grievance : {
            type: String,
            required : true,
        },
        grievanceReply :{
            type: String,
        },
        grievanceNotification :{
            type: String,
            required:true,
        },
        supportingDocs :{
            type: String,
        },
        status:{
            type:String,
        },
    },
    { timestamps: true }
);

const grievances = new model("grievances",grievanceModel);

module.exports = grievances;