const express = require('express');
const path = require("path");
const fs = require('fs')

const upg = express();

upg.get('/:filename', (req,res)=>{
    const filename = req.params.filename
    const file = path.join(__dirname, 'pages', filename)

    fs.access(file, (err) =>{
        if (err) {
            return res.sendFile(path.join(__dirname, 'pages', '404.html'))
        }
        res.sendFile(file)
    })
    // res.sendFile(path.join(__dirname, 'pages', 'index.html'))
})

upg.listen(8080, () => console.log(`Service running at http://localhost:8080`));