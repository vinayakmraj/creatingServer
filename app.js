const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log("Request has been made from Browser to Server");
    // console.log(req.method);
    // console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    //res.write('<h1> Hello, world !</h1>');
    //res.end();

    let path = './data';
    switch (req.url) {
        case '/':
            path += '/index.html'
            break;
        case '/about':
            path += '/about.htm'
            break;
        default:
            path += '/404.htm'
            break;
    }

    fs.readFile(path, (err, data)=>{
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, "localhost", ()=>{
    console.log("Server is running on port 3000");
})