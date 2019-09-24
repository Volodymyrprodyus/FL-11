let wins = 0;
let losses = 0;
let ties = 0;

const tallyUp = (score) => {
  if (score === "win") {
    let setWins = document.getElementById("wins");
    setWins.innerHTML = wins += 1;
  } else if (score === "lose") {
    let setLosses = document.getElementById("losses");
    setLosses.innerHTML = losses += 1;
  } else {
    let setTies = document.getElementById("ties");
    setTies.innerHTML = ties += 1;
  }
};

export { tallyUp };
