let randomNum = 0;
let userNum = 0;
let price = 0;
let price2 = 0;
let startGame = confirm('Do you want to play a game?');
let endRange = 8;
let rangeStep = 4;
let attempts = 3;
let startMaxPrise = 100;
const TWO = 2;
let againConfirm;
let attemptConfirm;
if (startGame === true) {
    do {
        for (let j = 0; j < Infinity; j++) {
            let maxNum = endRange+j*rangeStep;
            randomNum = parseInt(Math.random()*maxNum); 
            for (let i = 0; i < attempts; i++) { 
                if (i===0 || i===1) {
                price2 = startMaxPrise/(i+1)*Math.pow(TWO, j);  
                } else if (i===TWO) {
                price2 = startMaxPrise/(i+TWO)*Math.pow(TWO, j);
                } 
                let someUserNum = prompt('Choose a roulette pocket number from 0 to '+ maxNum + 
                '\nAttempts left: ' +(attempts-i)+'\nTotal prize: ' +price+
                '$\nPossible prize on current attempt: '+price2+' $', 'Your number');
                let userNum = parseFloat(someUserNum);
                if (i===0 && randomNum===userNum) {
                    price2 = startMaxPrise/(i+1)*Math.pow(TWO, j);
                    price = price2;
                    break;
                } else if (i===1 && randomNum===userNum) {
                    price2 = startMaxPrise/(i+1)*Math.pow(TWO, j); 
                    price = price2;
                    break;
                } else if (i===TWO && randomNum===userNum) {
                    price2 = startMaxPrise/(i+TWO)*Math.pow(TWO, j); 
                    price = price2;
                    break;  
                } else if (i===TWO && randomNum!==userNum) {
                    alert('Thank you for your participation. Your prize is: '+ price+' $');
                    againConfirm = confirm('Do you want to play again'); 
                    break; 
                }
            }
            if (againConfirm === false) {
                alert('Thank you for your participation. Your prize is: '+ price+' $');
                againConfirm = confirm('Do you want to play again');
                break;
            } else if (againConfirm === true && j>0) {
                continue;
            } else if (againConfirm === true) {
                break;
            }
            attemptConfirm = confirm('Congratulation, you won!   Your prize is: '+ price+
            ' $. Do you want to continue?'); 
            
            if (attemptConfirm === false) {
                break;
            } else if (attemptConfirm === true) {
                continue;
            } 
        }
        alert('Thank you for your participation. Your prize is: '+ price+' $');
        againConfirm = confirm('Do you want to play again');
    } while (againConfirm === true);
} else if (startGame === false) {
    alert('You did not become a billionaire, but can.');
}