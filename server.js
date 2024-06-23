import http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  // res.write("Hello world!");
  // res.end();

  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 500;

  // res.writeHead(404, { "Content-Type": "application/json" });
  // res.write(JSON.stringify({ message: "hi sathish" }));

  res.end("<h1>Hello world!</h1>");
});

server.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});
