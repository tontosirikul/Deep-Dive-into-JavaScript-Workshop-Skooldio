// 1. Extend the Array.prototype to have the sayHello method that loop through the array elements and print out:
// Hello Antman
// Hello Ironman
// Hello Thor
// Hello Spiderman
const heroNames = ["Antman", "Ironman", "Thor", "Spiderman"];

Array.prototype.sayHello = function () {
  for (let i = 0; i < heroNames.length; i++) {
    console.log(heroNames[i]);
  }
};

Array.prototype.sayHello = function () {
  this.forEach((name) => console.log(name));
};

heroNames.sayHello();
