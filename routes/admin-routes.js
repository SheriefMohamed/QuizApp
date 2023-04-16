const router = require('express').Router();
const Question = require('../models/question-model');

// add question
router.post('/question', async (req, res) => {
    try{
        let question = new Question(req.body);
        question = await question.save();
        return res.json({
            success: true,
            question
        });
    } catch(err) {
        return res.json({
            success: false,
            error: err.errors
        });
    }
})

// delete a question
router.delete('/question/:questionId', async (req, res) => {
    await Question.findByIdAndRemove(req.params.questionId);
    res.json({
        success: true
    })
})

//update question page
router.put('/question/:questionId', async (req, res) => {
    try{
        const question = await Question.findByIdAndUpdate(req.params.questionId, req.body, {new: true, runValidators: true});
        return res.json({
            success: true,
            question
        })
    } catch(err){
        return res.json({
            success: false,
            error: err.errors
        });
    }
})

//get quetion update page
router.get('/question/:questionId', async (req, res) => {
    const question = await Question.findById(req.params.questionId);
    res.render('question.ejs', {question, editMode: true});
})

//get quiz edit page
router.get('/quiz', async (req, res) => {
    const questions = await Question.find();
    return res.render('quiz.ejs', {questions});
})

//add question page
router.get('/question', async (req, res) => {
    return res.render('question.ejs', {editMode: false});
})

module.exports = router;