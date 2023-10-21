const { check } = require("express-validator");

const applicationNumber = check("applicationNumber","Please Enter valid Application Number").not().isEmpty()
const fullName = check("fullName","Please Enter FullName").not().isEmpty()
const email = check('email', 'Please Enter a valid email').isEmail()
const aadharNumber = check("aadharNumber","Please Enter Valid 12 digit AadharNumber").isLength({ min: 12, max: 12 }).matches(/^[0-9]{12}$/)
const phoneNumber = check("phoneNumber", "give valid phone number").isMobilePhone()
const grievance = check("grievance", "Please Enter Grievance").not().isEmpty()

const grievanceValidations = [applicationNumber,fullName,email,aadharNumber,phoneNumber,grievance];

module.exports= grievanceValidations;