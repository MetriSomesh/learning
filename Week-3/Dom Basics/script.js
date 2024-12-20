const hTag = document.getElementById("update");

let counter = 0;

function callback() {
  hTag.innerHTML = counter;
  counter += 1;
}

setInterval(callback, 1000);
