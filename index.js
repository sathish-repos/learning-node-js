const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const port = process.env.PORT || 5000;
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// init logger
app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// users api routs
app.use("/api/users", require("./routs/api/users"));

app.listen(port, () => console.log(`server started on port ${port}`));
