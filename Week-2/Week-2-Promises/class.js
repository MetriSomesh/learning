class Animal {
  constructor(name) {
    this.name = name;
  }

  giveName() {
    return this.name;
  }
}

const rabbit = new Animal("Shawn");

const name = rabbit.giveName();
console.log(name);
