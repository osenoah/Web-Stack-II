const http = require('http');
const url = require('url');
const fs = require('fs');

const quakers = './index.html'
const err = './404.html'
const about = './about.html'
const contact = './contact-me.html'

const Quaker = http.createServer ( function (req,res) {
    const q = url.parse(req.url, true)
    const p = "." + q.pathname
    fs.readFile(p, 'utf8', function (err, data){
        if (err) {
            console.error('error')
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        }
    })
}
);

Quaker.listen(8080)