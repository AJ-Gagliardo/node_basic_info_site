const fs = require("fs");
const http = require("http");

const homepage = fs.readFileSync("index.html", "utf-8");
const about = fs.readFileSync("about.html", "utf-8");
const contact = fs.readFileSync("contact.html", "utf-8");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(homepage);
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(about);
      res.end();
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(contact);
      res.end();
    } else {
      res.end("error 404, not found");
    }
  })
  .listen(8080);
