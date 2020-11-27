// 1. Refactor the code snippet to create stateful functions using the closure concept

function add(num) {
  return function (value) {
    return num + value;
  };
}

const addFive = add(5);
const addTen = add(10);

console.log("Add Five", addFive(10));
console.log("Add Ten", addTen(10));
