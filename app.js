const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let newItems = [];
let newItemWork = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);

    res.render('list', { kindOfDay: day, NewItemAdd: newItems });
});

app.post('/', (req, res) => {
    let newItem = req.body.addItem;

    if (req.body.list === "Work") {
        newItemWork.push(newItem);
        res.redirect('/work');
        console.log(req.body);

    } else {
        newItems.push(newItem);

        res.redirect('/');

        console.log(req.body);
        console.log(newItems);

    }
});

app.get('/work', (req, res) => {
    res.render('list', { kindOfDay: "Work list", NewItemAdd: newItemWork });
    
});

// app.post('/delete_item', (req, res) => {
//     const itemIndex = req.body.position;

//     newItems.splice(itemIndex, 1);
//     res.redirect('/');
    
// });
app.post('/delete_item', (req, res) => {
    let itemIndex = req.body.position;
    if (req.body.list === "Work"){
        newItemWork.splice(itemIndex, 1);
        res.redirect('/work');
    } else {
        newItems.splice(itemIndex, 1);
        console.log('hola');
        res.redirect('/');
    }  
});


app.get('/resetItems', (req, res) => {
    newItems = [];
    res.redirect('/');
});


// app.get('/about', (req, res)=>{
//     res.render('about');
// })


app.listen(3006, () => {
    console.log("Server is running on port 3006");
});

