// 1. What would be the value of "this" defined in the attack and move functions?
// 2. Correct the code snippet to print out "Ironman is attacking" and "Ironman is moving" respectively

const ironMan = {
  name: "Ironman",
  attack: function () {
    console.log(`${this.name} is attacking`);
    ironMan.move;
  },
  move: function () {
    console.log(`${this.name} is moving`);
  },
};

ironMan.attack();
