const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);

  res.end("<h1>Hello Node!!!!</h1>\n");
});
server.listen(3000, () => {
  console.log("Server is running ");
});
