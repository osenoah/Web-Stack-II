const mongoose = require('mongoose')

require('dotenv').config()

const mongoConnect = process.env.MONGOLAB_URI

const connectDB = (url) => {
    return mongoose.connect(mongoConnect)
}

module.exports = connectDB;