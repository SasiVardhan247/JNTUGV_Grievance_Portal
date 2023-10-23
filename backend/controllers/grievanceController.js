const Grievance = require('../models/grievance.model');
const nodemailer = require("nodemailer");
const crypto = require('crypto');
// const { v4: uuidv4 } = require('uuid');

// const transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com",
//     port: 587,
//     auth: {
    //       user: process.env.AUTH_EMAIL,
    //       pass: process.env.AUTH_PASS,
    //     },
    //   });
const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS
    },
});

const generateUniqueAcknowledgmentNumber = async() => {
    const timestamp = Date.now().toString();
    // console.log(timestamp)
    const randomBytes = crypto.randomBytes(4).toString('hex'); // You can adjust the number of bytes for randomness

    const acknowledgmentNumber = timestamp + randomBytes;
    const hash = crypto.createHash('sha256').update(acknowledgmentNumber).digest('hex');

    return hash.slice(0,5); // Adjust the length as needed
}

//This is 36 long ack number ex:86531862-bc94-4bab-aa15-1c233efeb80e will always be unique use this function when the requests are too huge
// const generateUniqueAcknowledgmentNumber = async() => {
//     const acknowledgmentNumber = uuidv4();
//     return acknowledgmentNumber;
// }

// console.log(generateUniqueAcknowledgmentNumber())
exports.getGrievance = async(req,res) =>{
    try{
        const grievances = await Grievance.find({})
        // console.log(grievances)
        res.status(200).json({status:true,grievances,msg: 'grievances'})
    }catch(err){
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
};
exports.applyGrievance = async(req,res) =>{
    try{
        // const pad = (num, size) => {
        //     let s = num + "";
        //     while (s.length < size) {
        //       s = "0" + s;
        //     }
        //     return s;
        // };
        // const getCountWithLeadingZeros = async () => {
        //     const count = await Grievance.countDocuments({});
        //     const incrementedCount = count + 1;
        //     const countString = pad(incrementedCount, 5);
        //     return countString;
        // };
        const {email} = req.body
        console.log(req.body);
        // const formattedCount = await getCountWithLeadingZeros();
        // const formattedCount = await generateUniqueAcknowledgmentNumber();
        const formattedCount = await generateUniqueAcknowledgmentNumber();
        await Grievance.create({...req.body,acknoledgementId:`SGRNO${formattedCount}`,status:'pending', grievanceResponseTime : null , grievanceReply : null})
        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "JNTUGV-Grievance",
            html: `<p>Your Acknoledgement number is <b>SGRNO${formattedCount} </b>.You can Track your Grievance response using this Acknoledgement Number</p>`,
        };
        // transporter.sendMail(mailOptions, (err, info) => {
        //     if (err) {
        //       console.log("err", err);
        //       console.log(info.messageId);
        //     }
        // });
        res.status(200).json({status:true,msg:"Grievance added successfully",acknoledgementId: `SGRNO${formattedCount}`})
    } catch (err) {
        console.log("err",err)
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
};

exports.updateGrievance = async(req,res) =>{
    try{
        const id = req.header('id');
        const currentTime = Date.now();
        console.log("hitted")
        await Grievance.findByIdAndUpdate(id,{...req.query,grievanceResponseTime:currentTime}).catch((err) => console.log(err))
        res.status(200).json({status:true,msg:"Grievance Updated successfully"})
    }catch(err){
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
};

exports.checkStatus = async(req,res) =>{
    try{
        const {acknoledgementId} = req.body.params
        const grievance = await Grievance.findOne({acknoledgementId}).exec();
        if (grievance){
            res.status(200).json({search_status:true,msg:"Fetched Sucessfully",grievance})
        }
        else{
            res.status(400).json({search_status:false,msg:"No Record Found"})
        }
    }catch(err){
        return res.status(500).json({ search_status: false, msg: "Internal Server Error" });
    }
}



exports.fetchGrievance = async (req,res) => {
    try {
        const {id} = req.headers;
        const grievance = await Grievance.findOne({ _id : id }).exec();
        return res.status(200).json({
            status : true,
            grievance : grievance,
            msg : "fetched grievance successfully"
        })
    }
    catch(err) {
        return res.status(500).json({
            status : false,
            msg : "Not found"
        })
    }
}