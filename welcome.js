const fs = require("fs");
const path = require("path");
const filePath = path.resolve("Welcome.txt");

fs.writeFile(filePath, "Hello Node", (err) => {
  if (err) throw err;
  console.log("File has ben created succesfully");
});

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (err) throw err;
  console.log(data);
});
