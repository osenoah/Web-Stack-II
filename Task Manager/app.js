const express = require('express')
const tasks = require('./routers/tasks')
const app = express();
const dotenv = require('dotenv')
const connectDB = require('./db/connect')
//mw
app.use(express.json());



//routes
app.get('/hello', (req,res)=>{
    res.send('Omo Node sha')
})

app.use('/api/v1/tasks', tasks);
// app.use('/api/v1/tasks', tasks);
// app.use('/api/v1/tasks/:id', tasks);
// app.use('/api/v1/tasks', tasks);
// app.use('/api/v1/tasks', tasks);


const port = 3000;

const start = async () =>{
    try{
        await connectDB()
        app.listen(port, console.log(`Server is running on ${port}....`))
    }catch(err){
        console.log(err)
    }
}

start()