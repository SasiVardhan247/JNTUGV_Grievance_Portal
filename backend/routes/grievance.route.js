const express = require("express");
const { applyGrievance, updateGrievance, getGrievance, checkStatus, fetchGrievance } = require("../controllers/grievanceController");
const { verifyToken } = require("../middleware/auth");
const grievanceValidations = require("../utils/validation");
const { validationMiddleware } = require("../middleware/validator");
const router = express.Router();

router.post('/applyGrievance',grievanceValidations,validationMiddleware,applyGrievance)
router.get('/updateGrievance',verifyToken,updateGrievance)
router.get('/getGrievance',verifyToken,getGrievance)
router.post('/checkStatus',checkStatus)
router.get("/fetchGrievance", verifyToken , fetchGrievance)

module.exports = router;