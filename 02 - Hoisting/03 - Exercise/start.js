// 1. How many execution contexts do we have?
// 2. Guess the result of the code snippet
// 3. Correct the code snippet to print out "Thor", "Antman", "Spiderman", and "Ironman" respectively

// function marvel() {
//   const heroes = ["Thor", "Antman", "Spiderman", "Ironman"];

//   // if you use var i, it will hoist to the top
//   // change var to let (change to box scope)
//   for (let i = 0; i < heroes.length; i++) {
//     setTimeout(() => {
//       // 4 undefined because
//       console.log(heroes[i]);
//     }, 1000 * (i + 1));
//   }
// }
// marvel();

function marvel() {
  const heroes = ["Thor", "Antman", "Spiderman", "Ironman"];

  // if you use var i, it will hoist to the top
  // change var to let (change to box scope)
  for (var i = 0; i < heroes.length; i++) {
    ((i) => {
      setTimeout(() => {
        // 4 undefined because
        console.log(heroes[i]);
      }, 1000 * (i + 1));
    })(i);
  }
}
marvel();
