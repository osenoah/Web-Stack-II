const http = require('http');
const url = require('url');
const fs = require('fs');

// const quakers = './index.html'
// const about = './about.html'
// const contact = './contact-me.html'

const Quaker = http.createServer ( function (req,res) {
    const q = url.parse(req.url, true)
    const p = "." + q.pathname
    fs.readFile(p, 'utf8', function (error, data){
        if (error) {
            fs.readFile('./404.html', 'utf8', function (err404, data404) {
                if (err404) {
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    res.write('404 - fILE NOT fOUND')
                } else {
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    res.write(data404)
                    return res.end()
                }
            })
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