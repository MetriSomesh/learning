function promisifiedSetTimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  await promisifiedSetTimeout(1000);
  console.log("hi");
  await promisifiedSetTimeout(2000);
  console.log("hello");
  await promisifiedSetTimeout(5000);
  console.log("hi there");
}

main();
console.log("yoooooo");
