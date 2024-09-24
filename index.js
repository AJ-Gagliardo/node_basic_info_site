const fs = require("fs");
const http = require("http");

const homepage = fs.readFileSync("index.html", "utf-8");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "txt/html" });
      res.write(homepage);
    } else {
      res.end("error 404, not found");
    }
  })
  .listen(8080);
