const express = require("express");
const { applyGrievance, updateGrievance, getGrievance } = require("../controllers/grievanceController");
const router = express.Router();

router.post('/applyGrievance',applyGrievance)
router.put('/updateGrievance',updateGrievance)
router.get('/getGrievances',getGrievance)

module.exports = router;