const Grievance = require('../models/grievance.model');

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
        console.log(req.body)
        await Grievance.create({...req.body})
        res.status(200).json({status:true,msg:"Grievance added successfully"})
    } catch (err) {
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
};

exports.updateGrievance = async(req,res) =>{
    try{
        const {id} = req.query
        const currentTime = Date.now();
        await Grievance.findByIdAndUpdate({_id:id},{...req.body,grievanceResponseTime:currentTime},{new: true })
        res.status(200).json({status:true,msg:"Grievance Updated successfully"})
    }catch(err){
        console.error(err);
        return res.status(500).json({ status: false, msg: "Internal Server Error" });
    }
};