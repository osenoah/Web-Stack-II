const express = require('express')
const tasks = require('./routers/tasks')
const app = express();


//mw
app.use(express.json())



//routes
app.get('/hello', (req,res)=>{
    res.send('Omo Node sha')
})

app.use('/api/v1/tasks', tasks);


const port = 3000;

app.listen(port, console.log(`Server is running on ${port}....`))