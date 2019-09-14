

// 	Create class User which will set next properties: name, orderTotalPrice, weekendDiscount, nightDiscount, bonus.

class Users {
    constructor(name) {
        this.name = name || "";
    }
} 


class User extends Users {
    constructor(name) {
      super(name);
      this.orderTotalPrice = 0;
      this.price = 0;
      this.weekendDiscount = 0;
      this.nightDiscount = 0;
      this.bonus = 0;
      
    }


    makeOrder() {
        let price = this.orderTotalPrice-this.weekendDiscount-this.nightDiscount-this.bonus
        return 'Price after discount and including bonuses is ' + price;
    }
 
}

// Create decorator getDiscount(): In night time (23:00 - 6:00) user should get nightDiscount;
// also weekendDiscount if it is Saturday or Sunday.
function getDiscount (someuser) {
    console.log(new Date().getHours());
    const today = new Date();
    console.log(today.getHours());
    if (0 > today.getHours() < 5 || today.getHours() === 23) {
        someuser.nightDiscount = 3;
        if (today.getDay() == 6 || today.getDay() == 0) {
            someuser.weekendDiscount = 10;
        }
    } else {
        if (today.getDay() == 6 || today.getDay() == 0) {
            someuser.weekendDiscount = 10;
        }
    }
}

// Create decorator setBonus(): For each 100 uah user should get 5 uah bonus
// One of User’s methods must be makeOrder() and return ‘Price after discount and including bonuses is 56.20’ e.g.   
function setBonus(someuser, orderTotalPrice) {
    someuser.orderTotalPrice = orderTotalPrice;
    someuser.bonus = Math.floor(someuser.orderTotalPrice/100) * 5;
}

const user = new User('John');
const user2 = new User('Sam');

console.log("User: ", user);
getDiscount(user);
setBonus(user, 300)
console.log("User ", user.makeOrder());

console.log("User: ", user2);
getDiscount(user2);
setBonus(user2, 90)
console.log("User ", user2.makeOrder());