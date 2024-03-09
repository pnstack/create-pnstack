var http = require('http');

async function bootstrap() {
  console.log('Starting server...');
  //create a server object:
  http
    .createServer(function (req, res) {
      res.write('Hello World! 2024'); //write a response to the client
      res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080
}

bootstrap();
