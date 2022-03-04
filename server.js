const http = require("http");
const PORT = 8080;
const HOST = "127.0.0.1";
// YOUR NODE SERVER CODE GOES HERE
const server = http.createServer((request, response) => {
    response.end("Hello, Galvanize!");
  });

  server.listen(PORT, HOST, () => {
    console.log(`Server running at ${HOST}:${PORT}/`);
  });
