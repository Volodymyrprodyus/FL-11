const arr = ['rock', 'paper', 'scissors'];
let rand = "";
let wins = 0;
let losses = 0;
let ties = 0;

function chooseWeapon(weapon) {
  rand = arr[Math.floor(Math.random() * 3)];
  let choice = document.getElementById("choice");
  choice.innerHTML = `You chose ${weapon}, computer chose ${rand}.`;
  chooseFate(weapon, rand);
}

function chooseFate(weapon, rand)  {
  if(weapon === 'rock' && rand === 'scissors' ||
     weapon === 'paper' && rand === 'rock' ||
     weapon === 'scissors' && rand === 'paper') {
      let fate = document.getElementById("fate");
      fate.innerHTML = 'You win!';
     tallyUp('win');
  }   
  else if(weapon === 'rock' && rand === 'paper' || 
          weapon === 'paper' && rand === 'scissors' ||
          weapon === 'scissors' && rand === 'rock') {
            let fate = document.getElementById("fate");
            fate.innerHTML = 'You lose!';
    tallyUp('lose'); 
  }   
  else {
    let fate = document.getElementById("fate");
    fate.innerHTML = 'Push'; 
    tallyUp('tie');
  }   
}

function tallyUp(score) {
  if(score === 'win') {
    let setWins = document.getElementById("wins");
    setWins.innerHTML = wins += 1;
  }
  else if(score === 'lose') {
    let setLosses = document.getElementById("losses");
    setLosses.innerHTML = losses += 1;
  }
  else {
    let setTies = document.getElementById("ties");
    setTies.innerHTML = ties += 1;
  }
}