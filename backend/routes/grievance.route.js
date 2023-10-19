const express = require("express");
const { applyGrievance, updateGrievance, getGrievance, checkStatus, fetchGrievance } = require("../controllers/grievanceController");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router.post('/applyGrievance',applyGrievance)
router.get('/updateGrievance',verifyToken,updateGrievance)
router.get('/getGrievance',verifyToken,getGrievance)
router.post('/checkStatus',checkStatus)
router.get("/fetchGrievance", verifyToken , fetchGrievance)

module.exports = router;