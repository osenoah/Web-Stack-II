const express = require('express')

const app = express();

//routes
app.get('/hello', (req,res)=>{
    res.send('Omo Node sha')
})

const port = 3000;

app.listen(port, console.log(`Server is running on ${port}....`))