const express = require("express");
const fs = require("fs");
const db = require("../db/db.json");

const router = express.Router();

router.get('/api/notes', (req, res) => {
    let database = fs.readFileSync('db/db.json');
    database = JSON.parse(database);
    res.json(database);
    console.log("test");
});

// router.post("/api/notes", (req, res) => {
//     console.log("test");
// });

module.exports = router;