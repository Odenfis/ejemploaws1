const http = require('http');
const port = 3000;  

const server = http.createserver((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola a todos les dice su docente');
});

server.listen(port,() => {
    console.log('Server corriendo en el puerto: ${port}');
});
