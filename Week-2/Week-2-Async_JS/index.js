const fs = require("fs");

function printContent(err, data) {
  console.log("Data from the file is: ", data);
}

fs.readFile("temp.txt", "utf-8", printContent); //second

fs.readFile("temp2.txt", "utf-8", printContent); //third

console.log("DONE"); //prints first
