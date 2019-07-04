let a1 = prompt('Enter the length of the first side of the triangle', 0);
let b1 = prompt('Enter the length of the second side of the triangle', 0);
let c1 = prompt('Enter the length of the third side of the triangle', 0);
let a = parseFloat(a1);
let b = parseFloat(b1);
let c = parseFloat(c1); 
if (a+b<c || a+c<b || b+c<a) {
    console.log('Triangle doesn’t exist');  
} else if (a === b && b === c && c === a) {
    console.log('Equivalent triangle');
} else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle'); 
} 
