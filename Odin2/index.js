const express = require('express');
const path = require('path')
const ejs = require('ejs')

const app = express();

const messages = [
    {
        text: "Hi there!",
        user: 'Ose',
        added: new Date.now()
    },
    {
        text: "Hi there!",
        user: 'DebZ',
        added: new Date.now()
    }
];




const port = 8080;
const postLink = `http://localhost:${port}`
app.listen(port, console.log(`Server is listening at ${postLink}`))