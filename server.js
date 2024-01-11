const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Heloo Node  </h1>");
  }
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server is up and runing correctly on 3000...");
});
