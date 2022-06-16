const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let newItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);

    res.render('list', {kindOfDay: day, NewItemAdd: newItems});
});

app.post('/', (req, res)=>{
    let newItem = req.body.addItem;

    newItems.push(newItem);

    res.redirect('/');
    
});
app.listen(3006, () => {
    console.log("Server is running on port 3006");
});