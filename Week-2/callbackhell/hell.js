setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
      console.log("hi there");
    }, 5000);
  }, 2000);
}, 1000);
