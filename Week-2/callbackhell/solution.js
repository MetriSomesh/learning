function promisifiedSetTimeout(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

promisifiedSetTimeout(1000).then(function () {
  console.log("hi");
  return promisifiedSetTimeout(2000).then(function () {
    console.log("hello");
    return promisifiedSetTimeout(5000).then(function () {
      console.log("hi there");
    });
  });
});
