const { Router } = require('express')
const newMsg = Router()

newMsg.get('/', (req,res) => {
    res.render("form")
})

module.exports = newMsg;