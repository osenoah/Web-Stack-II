const http = require("http");
const url = require("url");
const fs = require("fs");
const express = require('express');
const path = require("path");
const { error } = require("console");

// const quakers = './index.html'
// const about = './about.html'
// const contact = './contact-me.html'
const upg = express();

// const Quaker = http.createServer(function (req, res) {
//     const q = url.parse(req.url, true);
//     const p = "." + q.pathname;

    // fs.readFile(p, "utf8", function (error, data) {
    //     if (error) {
    //         fs.readFile("./404.html", "utf8", function (err404, data404) {
    //             if (err404) {
    //                 res.writeHead(404, { "Content-Type": "text/html" });
    //                 res.write("404 - fILE NOT fOUND");
    //             } else {
    //                 res.writeHead(404, { "Content-Type": "text/html" });
    //                 res.write(data404);
    //             }
    //         });
    //     } else {
    //         res.writeHead(200, { "Content-Type": "text/html" });
    //         res.write(data);
    //         return res.end();
    //     }
    // });
// });


// upg.get('/Odin1', (req,res) =>{
    //     const wtd = path.join(__dirname, 'Pages')
    
    //     const Filename = req.params.name
    //     res.sendFile(Filename, wtd, function (err){
    //         if(err){
    //             console.error(err)
    //         } else{
    //            console.log('Sent:', Filename) 
    //         }
    //     })
    // });

    upg.get('/', (req,res)=>{
        const ut = 'index.html'
        res.sendFile(path.join(__dirname,'Pages', ut))
    })


upg.listen(8080, () => console.log(`Service running at http://localhost:8080`));

