// libraries
const http = require("http");
const express = require("express");
const app = express();


// Homepage
app.get('/', (req, res) => {
    console.log(req);
    res.send('hello world');
})

// sample page
app.get('/sample', (req, res) => {
    console.log(req);
    res.send(sample_page);
})



console.log("Opening port on 3100");

app.listen(3100);