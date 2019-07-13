function reverseNumber (num) {
    const numToString = num.toString();
    let res = '';
 for (let index = numToString.length-1; index >= 0; index--) {
  res+=numToString[index];    
 }
 let result = Math.sign(num) * parseInt(res) ; 
 return result;
}
console.log(reverseNumber (123));
console.log(reverseNumber (-456));
console.log(reverseNumber (10000));
reverseNumber (123);
reverseNumber (-456);
reverseNumber (10000);