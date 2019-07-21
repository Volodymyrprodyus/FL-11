const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});

function Fighter (inputarr) {
    const name = inputarr.name;
    const damage = inputarr.damage;
    const agility = inputarr.agility;
    let hp = inputarr.hp;
    let wins = 0;
    let losses = 0;
    let attacksuccess;
    
    function getName () {
        return name;
    }
    function getDamage () {
        return damage;
    }
    function getAgility () {
        return agility;
    }
    function getHealth () {
        return hp;
    }
    function attack (fight2) {
        let maxprob = 100;
        let probability = maxprob - fight2.getAgility(); 
        let random = Math.random() * maxprob;
        attacksuccess = random < probability;
        if (attacksuccess) {
            fight2.dealDamage(getDamage());
        console.log(getName() + ' make ' + getDamage() + ' damage to ' + fight2.getName());
        } else {
        console.log(getName() + ' attack missed');
        }
    }

    function logCombatHistory (){
        if (getHealth() === 0) {
            console.log('Name: ' + name + ', Wins: ' + wins + ', Losses: ' + losses);
        } else {
            console.log('Name: ' + name + ', Wins: ' + wins + ', Losses: ' + losses);
        } 
    }

    function heal (addhp) {
        if (addhp+hp <= inputarr.hp) {
            hp+= addhp;
        } else if (addhp+hp > inputarr.hp) {
            hp = addhp; 
        }
    }

    function dealDamage (reduceshp) {
        if (hp-reduceshp > 0) {
            hp-= reduceshp;
        } else if (hp-reduceshp <= 0) {  
            hp = 0;
        }
    }

    function addWin () {
        wins++;
    }

    function addLoss () {
        losses++;
    }

    return {
        getName,
        getDamage,
        getAgility,
        getHealth,
        attack,
        logCombatHistory,
        heal,
        dealDamage,
        addWin,
        addLoss
    }
}
 
function battle (fighter1, fighter2) {
    if (Math.abs(fighter1.getHealth() - fighter2.getHealth()) !== fighter1.getHealth() + fighter2.getHealth()) {
        do {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        } while (Math.abs(fighter1.getHealth() - fighter2.getHealth()) !== fighter1.getHealth() + fighter2.getHealth());
        if (fighter1.getHealth() <= 0) {
            fighter1.addLoss();
            fighter2.addWin();
        } else if (fighter2.getHealth() <= 0) {
            fighter2.addLoss();
            fighter1.addWin();
        } 
    } else {
        if (fighter1.getHealth() === 0) {
            console.log('Sorry, '+fighter1.getName()+' is dead and can`t fight.');
        } else if (fighter2.getHealth() === 0) {
            console.log('Sorry, '+fighter2.getName()+' is dead and can`t fight.');
        }
    }
}
