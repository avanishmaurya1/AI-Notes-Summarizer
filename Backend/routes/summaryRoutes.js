const express = require("express");
const router = express.Router();

const { summarizeNotes } = require("../controllers/summaryController");

// POST API
router.post("/summarize", summarizeNotes);

module.exports = router;