// 1. What would be the result of the code snippet?
// 2. Correct the code snippet to print out "Counter 1" and "Counter 2" respectively
// Bonus: Use the Closure concept to prevent the "counter" variable from polluting the global scope

function createCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    console.log("Counter", counter);
  };
}
const times = createCounter(); // call outer() function declare counter = 0 which return inner() to use
times(); // use inner()
times(); // use inner()
