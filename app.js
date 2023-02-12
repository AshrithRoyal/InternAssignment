const { render } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public')); // To make css files public
app.set('view engine', 'ejs'); // For ejs rendering
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({
    extended: true
}))
const obj = require("./db") // Importing the js file
let li = obj.pages
console.log(obj)
app.listen(4000); // Server running on port 4000
// The first page to be displayed on server up and running
app.get('/', (req,res) => {
    res.render('desc.ejs', {li : li[0]})
})
// Used for rendering the page content based on the page number clicked
app.get('/:id', (req,res) => {
    const id = parseInt(req.params.id); // getting id from the request
    // searching if the requested id is in the list
    for(let x of obj['pages'])
    {
        if(x.id ===  id)
        {
            // rendering if the requested one is there
            res.render('desc.ejs',{li : x})
        }
    }
})