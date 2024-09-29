const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectionString = (process.env.MONGOLAB_URI)

dotenv.config(connectionString)

mongoose.connect(connectionString).then(()=>console.log('Connected with Db')).catch((err) => console.log(err))