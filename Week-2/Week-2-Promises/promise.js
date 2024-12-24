// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("HELOO THERE:");
// }

// setTimeoutPromisified(2000).then(callback);

const fs = require("fs");

function fetchPromisified(file) {
  return new Promise((resolve) => fetch(file).then(resolve));
}

function convertToText(x) {
  return x.text();
}

function print(y) {
  console.log(y);
}

// fetchPromisified("https://jsonplaceholder.typicode.com/todos/1")
//   .then(convertToText)
//   .then(print);

// let file = "https://jsonplaceholder.typicode.com/todos/1";
// fetch(file)
//   .then((x) => x.text())
//   .then((y) => console.log(y));

function promisifiedReadFile(file) {
  return new Promise((resolve) =>
    fs.readFile(file, "utf-8", function (err, data) {
      resolve(data);
    })
  );
}

function print(data) {
  console.log("THE DATA IS", data);
}

promisifiedReadFile("a.txt").then(print);

// const content = fs.readFile("a.txt", "utf-8", );
// console.log(content);
