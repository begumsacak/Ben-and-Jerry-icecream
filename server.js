const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
const PORT = 8080

//handlebar documentation
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
];

app.get(`/icecream/:name`), (req,res) => {

})

app.get(`icecreams`), (req, res) => {

})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)
