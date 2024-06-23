import { createServer } from "http";

const port = process.env.port;

const users = [
  { id: 1, name: "sathish" },
  { id: 2, name: "nithish" },
  { id: 3, name: "ruban" },
];

// logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} to ${req.url}`);
  next();
};

// json middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// route handler for GET /api/users
const getUsers = (req, res) => {
  res.end(JSON.stringify(users));
};

// route handler for GET /api/users/:id
const getUserById = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((usr) => usr.id === parseInt(id));
  if (user) {
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "user not found" }));
  }
};

// route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// api not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.end(JSON.stringify({ message: "api route not found" }));
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsers(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserById(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
