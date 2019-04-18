const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

router.get('/', (req, res) => {
    res.send('authorIndexRouterhit')
});

module.exports = router;