const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());

var myArray = [
    '#FFFF00'
];
var rand = Math.floor(Math.random() * myArray.length);
var rValue = myArray[rand];

app.get('/color', (req, res) => {
    res.send(rValue);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
