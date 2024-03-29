const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    
    const {method, url} = request;
    
    if(url === '/') {
        response.statusCode = 200;
        response.end('<h1>Ini adalah homepage</h1>');
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>GET data about</h1>');
        } else if (method === 'POST'){
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Hai, ${name}! Ini adalah halaman about menggunakan method ${method}</h1>`);
            });
        } else {
            response.statusCode = 400;  
            response.end(JSON.stringify({
                message: 'Halaman tidak ditemukan!',
            }));
        }
    }
    else {
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }

    // if(method == 'GET') {
    //     response.end('getting the data');
    // }
    // if (method == 'POST') {
    //     let body = [];

    //     request.on('data', (chunk) => {
    //         body.push(chunk);
    //     })

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString();
    //         const {name} = JSON.parse(body);
    //         response.end(`<h1>Hai, ${name}!</h1>`);
    //     })
    // }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
