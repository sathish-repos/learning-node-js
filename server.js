import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 3000;

// get current path
const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
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
      let filepath;
      if (req.url === "/") {
        filepath = path.join(__dirname, "public", "pages", "index.html");
        // res.end("<h1>Hey, Hello world!</h1>");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "pages", "about.html");
        // res.end("<h1>About Page</h1>");
      } else {
        filepath = path.join(
          __dirname,
          "public",
          "pages",
          "page-not-found.html"
        );

        res.statusCode = 404;
        // res.end("<h1>404 Not Found</h1>");
      }

      const data = await fs.readFile(filepath);
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    } else {
      throw new Error("method not allowed");
    }
  } catch (error) {
    res.statusCode = 500;
    res.end("<h1>Server error</h1>");
  }
});

server.listen(8000, () => {
  console.log(`Server listening to port: ${8000}`);
});
