const Grievance = require('../models/grievance.model');
const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com",
//     port: 587,
//     auth: {
//       user: process.env.AUTH_EMAIL,
//       pass: process.env.AUTH_PASS,
//     },
//   });

exports.getGrievance = async(req,res) =>{
    try{
        const grievances = await Grievance.find({})
        res.status(200).json({status:true,grievances,msg: 'grievances'})
    }catch(err){
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
};
exports.applyGrievance = async(req,res) =>{
    try{
        const pad = (num, size) => {
            let s = num + "";
            while (s.length < size) {
              s = "0" + s;
            }
            return s;
        };
        const getCountWithLeadingZeros = async () => {
            const count = await Grievance.countDocuments({});
            const incrementedCount = count + 1;
            const countString = pad(incrementedCount, 5);
            return countString;
        };
        const {email} = req.body.params
        console.log(req.body);
        const formattedCount = await getCountWithLeadingZeros();
        await Grievance.create({...req.body.params,acknoledgementId:`SGRNO${formattedCount}`,status:'pending', grievanceResponseTime : null , grievanceReply : null})
        // const mailOptions = {
        //     from: process.env.AUTH_EMAIL,
        //     to: email,
        //     subject: "JNTUGV-Grievance",
        //     html: `<p>Your Acknoledgement number is <b>${formattedCount}.You can Track your Grievance response using this</b></p>`,
        // };
        // transporter.sendMail(mailOptions, (err, info) => {
        //     if (err) {
        //       console.log("err", err);
        //       console.log(info.messageId);
        //     }
        // });
        res.status(200).json({status:true,msg:"Grievance added successfully"})
    } catch (err) {
        console.log(err)
        return res.status(200).json({ status: false, msg: "Internal Server Error" });
    }
};

exports.updateGrievance = async(req,res) =>{
    try{
        const {id} = req.query
        const currentTime = Date.now();
        await Grievance.findByIdAndUpdate({_id:id},{...req.body,grievanceResponseTime:currentTime,status:'success'},{new: true })
        res.status(200).json({status:true,msg:"Grievance Updated successfully"})
    }catch(err){
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
};

exports.checkStatus = async(req,res) =>{
    try{
        const {acknoledgementId} = req.body.params
        const grievance = await Grievance.findOne({acknoledgementId}).exec();
        res.status(200).json({search_status:true,msg:"status sent",grievance})
    }catch(err){
        return res.status(200).json({ search_status: false, msg: "Internal Server Error" });
    }
}