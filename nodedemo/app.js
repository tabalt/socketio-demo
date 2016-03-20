var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var url = require("url");

app.listen(8088);

function renderView(req, res, file) {
    var filePath = __dirname + '/views/' + file;
    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading ' + file);
        }

        res.writeHead(200);
        return res.end(data);
    });
}

function handler (req, res) {
    var pathname = url.parse(req.url).pathname;

    switch (pathname) {
        case '/':
            return renderView(req, res, 'index.html');
            break;
        default:
            res.writeHead(404);
            return res.end('404 Not found');
        ;
    }

    
}