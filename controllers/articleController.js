const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

router.get('/', (req, res) => {
    res.send('articleIndexRouterhit')
});

module.exports = router;