let addOne = function (a) { 
    return a+1;
}; 
function pipe (x, addOne) {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res+=addOne(x-1);
      }
    return res;
}
console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne)); 
pipe(1, addOne);
pipe(1, addOne, addOne);
  