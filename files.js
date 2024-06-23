// import fs from "fs";
import fs from "fs/promises";

// // readFile() async - callback function
// fs.readFile("./public/files/demoFile.txt", "utf8", (error, data) => {
//   if (error) console.log(error);
//   console.log(data);
// });

// // readFileSync() - sync function
// const data = fs.readFileSync("./public/files/demoFile.txt", "utf8");
// console.log(data);

// readFile() - promise .then()
// fs.readFile("./public/files/demoFile.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// readFile() - async/await
const readFile = async () => {
  try {
    const data = fs.readFile("./public/files/demoFile.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile(
      "./public/files/demoFile.txt",
      "Hello its written from writeFile function"
    );
    console.log("file appended to...");
  } catch (error) {
    console.log(error);
  }
};

export const appendFile = async (req, res, filePath, errorFilePath) => {
  try {
    let time = new Date();
    await fs.appendFile(filePath, `\n${time} ${req.method} to ${req.url}`);
  } catch (error) {
    fs.appendFile(
      errorFilePath,
      `\n${req.method} to ${req.url} (error)=> ${error}`
    );
  }
};

// writeFile();
// readFile();
