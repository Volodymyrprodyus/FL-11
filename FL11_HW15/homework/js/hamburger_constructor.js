
function Humburger (type, calories, check) {
   this.type = type;
   let addCheeseCall = 0;
   let addTomatoCall = 0;
   let stopAdding = false;
   let addSecretIngredientCall = 0;
   let biteCall = 0;
   if (check === true) {
    calories += 100;
    addSecretIngredientCall = 1;
   }

    this.getCalories = function  () {
        return calories;
    }

    this.setCalories = function (newCalories) {
        calories = newCalories;
        return calories;
    }

    this.addCheese = function () {
        if (stopAdding === true) {
            console.log('Sorry, you cannot add cheese.'); 
        } else if (addCheeseCall === 0) {
            calories += 120;
        } else {  
            console.log('Sorry, you can add cheese only once.');
        }
        addCheeseCall++;
    }

    this.addTomato = function () {
        if (stopAdding === true) {
            console.log('Sorry, you cannot add tomato.');
        } else if (addTomatoCall <= 1) {
            calories += 20; 
        } else {  
            console.log('Sorry, you can add tomato only twice.');
        }
        addTomatoCall++;
    }

    this.addSecretIngredient = function () {
        if (stopAdding === true) {
            console.log('Sorry, you cannot add secret ingredient.');
        } else if (addTomatoCall > 0 || addCheeseCall > 0) {
            console.log('Sorry, you can add secret ingredient only before another ingredient.');
        } else if (addSecretIngredientCall > 0 || check === true) {  
            console.log('Sorry, you can add secret ingredient only once.'); 
        } else if (addTomatoCall === 0 && addCheeseCall === 0 && addSecretIngredientCall === 0) {  
            calories += 100;
        }
        addSecretIngredientCall++;
    }

    this.bite = function () {
        stopAdding = true;
        biteCall++;
    }

    this.info = function () {
        let secIngStr = 'with secret ingredient, ';
        let cheeseStr = 'with cheese,\n';
        let tomatoStr = 'with ' + addTomatoCall + ' tomato, ';
        let bitStr = 'is bit ' + biteCall + ' times. ';
        let calStr = 'Total calories: ' + calories +'.';
        let typeSTR = this.type.charAt(0).toUpperCase() + this.type.slice(1);
        let zero = 0;

        if (addSecretIngredientCall === 0) {
            secIngStr = '';
        }
        if (addCheeseCall === 0) {
            cheeseStr = '';
        }
        if (addTomatoCall === 0) {
            tomatoStr = '';
        }
        if (biteCall === 0) {
            bitStr = '';
        }
        if (calories === 0) {
            calStr = '';
        }

        let infoStr = typeSTR + ' humburger: ' + secIngStr + cheeseStr + tomatoStr + bitStr + calStr;
        return infoStr;
    }

    return this;
}

const myHumburger = new Humburger('classic', 600);

// console.log(myHumburger);
// console.log(myHumburger.getCalories ());

// myHumburger.setCalories (700);
// console.log(myHumburger.getCalories ());

// myHumburger.addCheese();
// console.log(myHumburger.getCalories());
// myHumburger.addCheese();

// myHumburger.addTomato();
// console.log(myHumburger.getCalories());
// myHumburger.addTomato();
// console.log(myHumburger.getCalories());
// myHumburger.addTomato();


// myHumburger.addSecretIngredient();
// console.log(myHumburger.getCalories());
// myHumburger.addSecretIngredient();


// myHumburger.addTomato();
// myHumburger.addSecretIngredient();


// myHumburger.addSecretIngredient();
// console.log(myHumburger.getCalories());

// myHumburger.addSecretIngredient();
// myHumburger.addTomato();
// myHumburger.addCheese();
// myHumburger.bite();
// myHumburger.bite();
// myHumburger.bite();
// myHumburger.addTomato();

myHumburger.addSecretIngredient();
myHumburger.addTomato();
myHumburger.addCheese();
myHumburger.bite();
myHumburger.bite();
myHumburger.bite();
console.log(myHumburger.info());