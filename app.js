const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    var today = new Date();
    var day = daysOfWeek[today.getDay()];

    res.render('list', {kindOfDay: day});
});

app.listen(3006, () => {
    const birthday = new Date('September 17, 1998 15:35:22');
    const day1 = birthday.getDay();
    console.log(daysOfWeek[day1]);

    console.log("Server is running on port 3006");
});