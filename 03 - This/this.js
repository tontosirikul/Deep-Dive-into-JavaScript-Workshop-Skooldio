function print() {
  console.log(this);
}

const person = { name: "Ton" };

const x = print.bind(person);

x();
