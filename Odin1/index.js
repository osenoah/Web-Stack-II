const http = require('http');
const url = require('url');
const fs = require('fs');

// const quakers = './index.html'
// const err = './404.html'
// const about = './about.html'
// const contact = './contact-me.html'

const Quaker = http.createServer ( function (req,res) {
    const q = url.parse(req.url, true)
    const p = "." + q.pathname
    fs.readFile(p, 'utf8', function (error, data){
        if (error) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        }
    })
}
);

Quaker.listen(8080);
console.log(`Service running at http://localhost:8080`)