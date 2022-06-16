const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var newItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render('list', {kindOfDay: day, NewItemAdd: newItems});
});

app.post('/', (req, res)=>{
    var newItem = req.body.addItem;

    newItems.push(newItem);

    res.redirect('/');
    
});
app.listen(3006, () => {
    console.log("Server is running on port 3006");
});