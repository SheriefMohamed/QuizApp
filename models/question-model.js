const mongoose = require('mongoose');
const Question = mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Please enter the Question !']
    },
    a: {
        type: String,
        required: [true, 'Please enter the answer a !']
    },
    b: {
        type: String,
        required: [true, 'Please enter the answer b !']
    },
    c: {
        type: String,
        required: [true, 'Please enter the answer c !']
    },
    d: {
        type: String,
        required: [true, 'Please enter the answer d !']
    },
    correct: {
        type: String,
        required: [true, 'Please enter correct answer !'],
        enum:{
            values: [
                "a",
                "b",
                "c",
                "d"
            ],
            message: "Please enter values in a, b, c or d !"
        }
    },
})

module.exports = mongoose.model('Questions', Question)