const express = require("express");
const path = require("path");

const port = process.env.PORT || 5000;
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
