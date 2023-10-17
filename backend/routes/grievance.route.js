const express = require("express");
const { applyGrievance, updateGrievance, getGrievance } = require("../controllers/grievanceController");
const router = express.Router();

router.post('/applyGrievance',applyGrievance)
router.put('/updateGrievance',updateGrievance)
router.get('/getGrievance',getGrievance)

module.exports = router;