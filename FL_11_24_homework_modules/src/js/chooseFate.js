import { tallyUp } from "./tallyUp";

const chooseFate = (weapon, rand) => {
  if (
    (weapon === "rock" && rand === "scissors") ||
    (weapon === "paper" && rand === "rock") ||
    (weapon === "scissors" && rand === "paper")
  ) {
    let fate = document.getElementById("fate");
    fate.innerHTML = "You win!";
    tallyUp("win");
  } else if (
    (weapon === "rock" && rand === "paper") ||
    (weapon === "paper" && rand === "scissors") ||
    (weapon === "scissors" && rand === "rock")
  ) {
    let fate = document.getElementById("fate");
    fate.innerHTML = "You lose!";
    tallyUp("lose");
  } else {
    let fate = document.getElementById("fate");
    fate.innerHTML = "Push";
    tallyUp("tie");
  }
};

export { chooseFate };
