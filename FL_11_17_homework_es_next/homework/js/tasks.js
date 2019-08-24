// Task 1
function maxElement(array) {
    return Math.max.apply(null, array);
}
const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];
console.log(maxElement(array));


// Task 2 (using the spread operator)
function copyArray (arr) {
    return [...arr];
}
const arr = [1, 2, 3];
const copiedArray = copyArray(arr);
console.log(arr, copiedArray);
console.log(arr === copiedArray);


// Task 3
function addUniqueId(obj) {
    const id = Symbol('ID');
    const newArr = {...obj};
    newArr.id = id;
    return newArr;
}
const obj = {name: 123};
console.log(addUniqueId (obj));
console.log(obj);
console.log(obj === addUniqueId(obj));


// Task 4
function regroupObject(obj) {
    let resObj = {};
    let {name, details} = obj;
    let {id, age, university} = details;
    resObj = {university: university, user: {age: age, firstName: name, id: id}};
    return resObj;
}
const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
console.log(regroupObject(oldObj));


// Task 5
function findUniqueElements (array5) {
    return [... new Set(array5)];
}
const array5 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 5];
console.log(findUniqueElements(array5));


// Task 6
function hideNumber(phoneNumber) {
    let hidePhoneNumber = phoneNumber.substr(phoneNumber.length - 4);
    let resStr = hidePhoneNumber.padStart(phoneNumber.length, '*');
    return resStr;
}
const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));


// Task 7
var add = function (x = required(), y = required()) {
    required = function () {
        throw new Error('Missing Property')
    }
    return x + y;
}
console.log(add(1, 3));
//console.log(add(1));


// Task 8
function filtereByName (url) {
    return fetch(url)
    .then(response => response.json())
    .then(people => {const names = people.map(person => person.name).sort();return names})
    .catch(error => console.log(`ERROR: ${error.stack}`));
}
filtereByName('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));;


// Task 9
async function filtereByName2 (url) {
    try {
        const response = await fetch(url);
	    const people = await response.json();
        const names = people.map(person => person.name).sort();
        return names;
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    } 
}
filtereByName2('https://jsonplaceholder.typicode.com/users').then(res => console.log(res));



