const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

// Calculator using :param
app.get('/calculator/:method', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const num = Number(req.query[key]);
        numbers.push(num);
    }
    if (req.params.method === 'Multiply') {
        const result = numbers.reduce((a,b) => a*b);
        res.send(`${result}`);
    }
    if (req.params.method === 'Divide') {
        const result = numbers.reduce((a,b) => a/b);
        res.send(`${result}`);
    }
    if (req.params.method === 'Add') {
        const result = numbers.reduce((a,b) => a+b);
        res.send(`${result}`);
    }
    if (req.params.method === 'Subtract') {
        const result = numbers.reduce((a,b) => a-b);
        res.send(`${result}`);
    }
})

// Calculator using req.body
/*
app.get('/calculator/:method', (req, res) => {
    const method = req.body.method;
    const numbers = [];
    for (const key in req.query) {
        const num = Number(req.query[key]);
        numbers.push(num);
    }
    if (req.params.method === 'Multiply') {
        const result = numbers.reduce((a,b) => a*b);
        res.send(`${result}`);
    }
    if (req.params.method === 'Divide') {
        const result = numbers.reduce((a,b) => a/b);
        res.send(`${result}`);
    }
    if (req.params.method === 'Add') {
        const result = numbers.reduce((a,b) => a+b);
        res.send(`${result}`);
    }
    if (req.params.method === 'Subtract') {
        const result = numbers.reduce((a,b) => a-b);
        res.send(`${result}`);
    }
})
*/




app.listen(port);