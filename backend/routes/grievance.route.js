const express = require("express");
const { applyGrievance, updateGrievance, getGrievance, checkStatus } = require("../controllers/grievanceController");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router.post('/applyGrievance',applyGrievance)
router.put('/updateGrievance',verifyToken,updateGrievance)
router.get('/getGrievance',verifyToken,getGrievance)
router.post('/checkStatus',checkStatus)

module.exports = router;