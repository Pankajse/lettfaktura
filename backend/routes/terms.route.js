const express = require("express");
const { getTerms } = require("../controllers/terms.controller");
const router = express.Router();

router.get("/getTerms", getTerms);

module.exports = router;