const router = require('express').Router();
const Questions = require('../models/question-model');

// get quiz page and do it
router.get('/', async (req, res) => {
    const questions = await Questions.find();
    res.render('index.ejs', {questions});
})

module.exports = router;