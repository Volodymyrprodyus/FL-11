function getMin(a, b, c) { 
    if (a<b && a<c) {
      return a;  
    } else if (b<a && b<c) {
       return b;
    } else {
      return c;  
    } 
}
// Better solution
// function getMin() {
//     let res = Math.min.apply(null, arguments);  
//     return res;
// }
console.log(getMin(3, 0, -3));
getMin(3, 0, -3);