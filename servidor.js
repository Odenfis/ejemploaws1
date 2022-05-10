const http = required('http');

const server = http.createserver((req, res) => {
    res.end('Hola mundo esto es una prueba de su docente')
})

server.listen(3000);
console.log('Servidor en el puerto 3000')