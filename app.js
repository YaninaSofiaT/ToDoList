const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

let newItems = [];
let newItemWork = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // let day = date();
    const day = date.getDate(); //or date.getDay();
    res.render('list', { kindOfDay: day, NewItemAdd: newItems, page: "Work list", ruth: "/work"});
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
    res.render('list', { kindOfDay: "Work list", NewItemAdd: newItemWork, page: "Pricipal List", ruth: "/"});
    
});

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

