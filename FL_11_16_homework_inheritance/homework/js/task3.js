function Pokemon () {
    this.type ='Fire';
}

Pokemon.prototype.getType = function () { 
    return this.type;
}
Pokemon.prototype.getPokemonType = function () { 
    return this.pokemonType;
}

Pokemon.prototype.getSpecie = function () {
    return this.specie;
}

Pokemon.prototype.canFly = function () {
    return this.fly;
}

Pokemon.prototype.getHitpoints = function() {
    return this.hitpoints
};

Pokemon.prototype.evolve = function() {
    if (this.pokemonType === 'Charmander') {
        return new Charmeleon();
    } else if (this.pokemonType === 'Charmeleon') {
        return new Charizard();
    } else if (this.pokemonType === 'Charizard') {
        return new Charizard();
    } else if (this.pokemonType === 'Pichu') {
        return new Pikachu();
    } else if (this.pokemonType === 'Pikachu') {
        return new Raichu();
    } else if (this.pokemonType === 'Raichu') {
        return raichu;
    } 
}

Pokemon.prototype.fight = function(fight2) {
    if (!fight2.isAlive()) {
        console.log(`${fight2.pokemonType} is killed`);
    } else {
        if (fight2.counterDefence === true) {
            fight2.counterDefence = false;
        } else {
            fight2.hitpoints = fight2.hitpoints - Math.floor(Math.random()*this.attack)*2;
            if (!fight2.isAlive()) {
                this.killFight2(fight2);
                console.log(`${this.pokemonType} killed ${fight2.pokemonType}`);
                fight2.hitpoints = 0;
            }
        }
    }
}

Pokemon.prototype.killFight2 = function(fight2) {
    if (this instanceof Charmander) {
        this.hitpoints = this.hitpoints - Math.random()* fight2.hitpoints*5;
    } else if (this instanceof Charmeleon) {
        this.hitpoints = this.hitpoints - Math.random()* fight2.hitpoints*10;
    } else if (this instanceof Charizard) {
        this.hitpoints = this.hitpoints - Math.random()* fight2.hitpoints*15;
    }
}

Pokemon.prototype.isAlive = function() {
    return this.hitpoints > 0;
};


function Charmander () {
    Pokemon.call(this);
    this.pokemonType = 'Charmander';
    this.specie = 'Lizard Pokémon';
    this.fly = false; 
    this.attack = 5;
    this.hitpoints = 40;
    this.counterDefence = true;
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmeleon () {
    Charmander.call(this);
    this.pokemonType = 'Charmeleon';
    this.specie = 'Flame Pokémon';
    this.fly = false;
    this.attack = 10;
    this.hitpoints = 60;
    this.counterDefence = false;
}
Charmeleon.prototype = Object.create(Charmander.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard () {
    Charmeleon.call(this);
    this.pokemonType = 'Charizard';
    this.fly = true; 
    this.attack = 15;
    this.hitpoints = 80;
    this.counterDefence = false;
}
Charizard.prototype = Object.create(Charmeleon.prototype);
Charizard.prototype.constructor = Charizard;
Charizard.prototype.wings = function() {
    if (this.hitpoints < 15) {
        this.fly = false;
        this.attack = this.attack + 1;
        this.hitpoints = this.hitpoints - 5;
        console.log(`${this.pokemonType} cannot fly`);
    }
}
Charizard.prototype.helpFly = function() {
    this.fly = true;
    this.hitpoints = 20;
    console.log(`${this.pokemonType} now can fly`);
}



// Creating another type of pokemos
function Pichu () {
    Pokemon.call(this);
    this.type ='Electric'
    this.pokemonType = 'Pichu';
    this.specie = 'Mouse Pokémon';  
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu () {
    Pichu.call(this);
    this.pokemonType = 'Pikachu';
}
Pikachu.prototype = Object.create(Pichu.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu () {
    Pikachu.call(this);
    this.pokemonType = 'Raichu';
}
Raichu.prototype = Object.create(Pikachu.prototype);
Raichu.prototype.constructor = Raichu;


// test
const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();


// fight between pokemons
charmander.fight(charmeleon);
console.log(charmeleon.getHitpoints()); 
charmeleon.fight(charizard);
charmeleon.fight(charizard);
charmeleon.fight(charizard);
charmeleon.fight(charizard);
charmeleon.fight(charizard);
charmeleon.fight(charizard);
charmeleon.fight(charizard);
console.log(charizard.getHitpoints()); 
charizard.wings(); // -> Charizard cannot fly
charizard.helpFly(); // -> Charizard now can fly
console.log(charizard.getHitpoints()); // -> 20


// task 3 test

console.log(charmander.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true

console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

console.log(charmander.canFly()); // -> false
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true

// aditional instances

const pichu = new Pichu();
console.log(pichu.getPokemonType()); // -> Pichu

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level
console.log(raichu2.getPokemonType()); // Raichu
console.log(raichu2 === raichu); // true
