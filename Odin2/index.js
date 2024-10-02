const express = require('express');
const app = express();
const path = require('path')
const iRouter = require('./routes/index')
const nRouter = require('./routes/new')
const css = path.join(__dirname, "public")

app.use(express.urlencoded({ extended: true }));
app.use(express.static(css))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', iRouter)
app.use('/new', nRouter)

const port = 8080;
const postLink = `http://localhost:${port}`
app.listen(port, console.log(`Server is listening at ${postLink}`))