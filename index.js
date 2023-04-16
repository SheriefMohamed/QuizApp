const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/quiz-routes'));
app.use('/admin', require('./routes/admin-routes'));


mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_LINK,() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connected on port ${process.env.PORT}!`);
    });
})