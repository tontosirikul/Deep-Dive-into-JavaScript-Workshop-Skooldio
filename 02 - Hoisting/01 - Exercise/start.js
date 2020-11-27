// 1. What will be hoisted?
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Ironman" and "Thor" respectively

var hero = "Ironman";

const updateHero = function () {
  console.log(`Hero before updating: ${hero}`);

  hero = "Thor";
  console.log(`Hero after updating: ${hero}`);
};

updateHero();
