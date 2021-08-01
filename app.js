const express = require('express');
const app = express();
const port = 3000;
const Square = require('./square.js');

const mySquare = new Square(2);

app.get('/', (req, res) => {
    res.send('Hello WOrld!')
});

app.listen(port, () => {
    console.log(`Example app listening to port ${port}!`);
    console.log(`The area of mySquare is ${mySquare.area()}`);
});