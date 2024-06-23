import http from "http";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // res.write("Hello world!");
  // res.end();

  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 500;

  // res.writeHead(404, { "Content-Type": "application/json" });
  // res.write(JSON.stringify({ message: "hi sathish" }));

  // console.log(req.url);
  // console.log(req);

  // if (req.url === "/") {
  //   res.end("<h1>Hey, Hello world!</h1>");
  // } else if (req.url === "/about") {
  //   res.end("<h1>About Page</h1>");
  // } else {
  //   res.end("<h1>404 Not Found</h1>");
  // }

  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.end("<h1>Hey, Hello world!</h1>");
      } else if (req.url === "/about") {
        res.end("<h1>About Page</h1>");
      } else {
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
      }
    } else {
      throw new Error("method not allowed");
    }
  } catch (error) {
    res.statusCode = 500;
    res.end("<h1>Server error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});
