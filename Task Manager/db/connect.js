const mongoose = require('mongoose')

require('dotenv').config()

const mongoConnect = process.env.MONGOLAB_URI


mongoose.connect(mongoConnect)
.then(() => console.log('Connected with Db'))
.catch((err) => console.log(err))