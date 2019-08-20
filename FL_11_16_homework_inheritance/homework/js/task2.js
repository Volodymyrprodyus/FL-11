

Object.create = function (parent) {
  function Tmp() {
    null;
  }
  Tmp.prototype = parent;
  return new Tmp();
}



const obj1 = { prop: 5 };
const obj2 = Object.create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1); // => true
console.log(obj2.prop); // => 5
