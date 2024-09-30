const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Must Provide name'],
        trim:true,
        maxlength:[15, 'Name cannot be more than 15 Characters']
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)