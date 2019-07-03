let a11 = prompt('Enter a1 (x coordinate) of point A');
let a22 = prompt('Enter a2 (y coordinate) of point A');
let b11 = prompt('Enter b1 (x coordinate) of point B');
let b22 = prompt('Enter b2 (y coordinate) of point B');
let c11 = prompt('Enter c1 (x coordinate) of point C');
let c22 = prompt('Enter c2 (y coordinate) of point C');
let a1 = parseFloat(a11);
let a2 = parseFloat(a22);
let b1 = parseFloat(b11);
let b2 = parseFloat(b22);
let c1 = parseFloat(c11);
let c2 = parseFloat(c22);
const TWO = 2;
let middleX = b1/TWO-a1/TWO;
let middleY = b2/TWO-a2/TWO;
let checkxC = c1-a1;
let checkyC = c2-a2;
let resultX = middleX-checkxC;
let resultY = middleY-checkyC;
let result = resultX+resultY;
let res = result===0;
if (a1===a2===b1===b2===c1===c2) { 
    console.log(!res);
} else { 
    console.log(res);
} 