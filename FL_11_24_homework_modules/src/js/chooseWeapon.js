import { chooseFate } from "./chooseFate";

const arr = ["rock", "paper", "scissors"];
let rand = "";



const chooseWeapon = weapon => {
  rand = arr[Math.floor(Math.random() * 3)];
  let choice = document.getElementById("choice");
  choice.innerHTML = `You chose ${weapon}, computer chose ${rand}.`;
  chooseFate(weapon, rand);
};

export { chooseWeapon };
