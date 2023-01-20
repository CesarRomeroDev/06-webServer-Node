const http = require('node:http');

// Create a local server to receive data from
// req: Es todo lo que estan solicitando toda la inf. del url que piden desde el sitio web.
// res: lo que el servidor le va a responder al cliente.
const server = http.createServer((req, res) => {
  res.writeHead(200, 
    { 'Content-Type': 'application/csv' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);

//////////////////////////////////////////////////////////////////////////////////////
//Video 89 Servir contenido estático.

//res.send : responde texto plano.
app.get('/estadis', (req, res) => {
  res.send('estadisticas');
});
//res.sendFile : responde path url.
app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
});