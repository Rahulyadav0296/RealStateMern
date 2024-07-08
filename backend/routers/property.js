const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/property");

router.get("/property", propertyController.getProperty);
router.post("/property", propertyController.postProperty);

module.exports = router;
