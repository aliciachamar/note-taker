const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    let database = JSON.parse(fs.readFileSync('db/db.json'));
    res.json(database);
});

router.post('/notes', (req, res) => {
    let database = JSON.parse(fs.readFileSync('db/db.json'));
    const newNote = {
        ...req.body, id: uuidv4()
    };
    database.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(database));
    res.json(database);
});

router.delete('/notes/:id', (req, res) => {
    let database =JSON.parse(fs.readFileSync('db/db.json'));
    let dbFiltered = database.filter(note => note.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(dbFiltered));
    res.json(dbFiltered);
});
    
    
module.exports = router;