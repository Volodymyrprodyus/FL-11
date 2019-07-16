function getNumbers (str) {
    let arr = str.split('');
    let temp = [];
    for(let i=0; i<arr.length; i++) {
        arr[i]=+arr[i];    
    }
    for(let j of arr) {
      j && temp.push(j); // copy each non-empty value to the 'temp' array
      arr = temp;
      delete temp[j]; // delete element of 'temp' array
    }
   return arr;
}
console.log(getNumbers('string'));
console.log(getNumbers('n1um3ber95'));
getNumbers('string'); // returns [] 
getNumbers('n1um3ber95'); // returns [1,3,9,5] 

function findTypes () {
        let args = [];
        let resObj = {};
        for (let i = 0; i < arguments.length; i++) {
            args[i] = typeof arguments[i]; 
        }
        for (let i = 0; i < args.length; ++i) {
           let a = args[i];
           if (resObj[a] !== undefined) {
              ++resObj[a];
           } else {
            resObj[a] = 1;
           }
        }
    return resObj;
}
console.log(findTypes('number'));
// console.log(findTypes(null, 5, 'hello'));
findTypes('number'); // returns {“string”:1} 
// findTypes(null, 5, 'hello'); // returns {“object”:1, “number”:1, “string”:1}

function executeforEach(array, callback) {
    for (let i=0; i <array.length; i++) {
        callback(array[i]);
    }
}
// executeforEach([1,2,3], function(el) { 
//     console.log(el); 
// }); // logs 1 2 3

function mapArray(array, callback) {
    let resarray = [];
    function cbtmp(el) {
        resarray.push(callback(el));
    }  
    executeforEach(array, cbtmp);
    return resarray;
}
// console.log(mapArray([2, 5, 8], function(el) { 
//     return el + 3; 
// })); // returns [5, 8, 11]


function filterArray(array, callback) {
    let result = [];
    function cbtmp(el) {
      if(callback(el)) {
        result.push(el);
      }  
    }  
    executeforEach(array, cbtmp);  
    return result;
}
// console.log(filterArray([2, 5, 8], function(el) { 
//     return el > 3; 
// })); // returns [5, 8]

function showFormattedDate (date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = date;
    let month = monthNames[d.getMonth()];
    let day = '' + d.getDate();
    let year = d.getFullYear();
return '`Date: ' +month+ ' ' +day+' '+year+'`';
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
// showFormattedDate(new Date('2019-01-27T01:10:00')) 
// returns ‘Date: Jan 27 2019’

function canConvertToDate(date) {
return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));
// canConvertToDate('2016-13-18T00:00:00') // false
// canConvertToDate('2016-03-18T00:00:00') // true

function daysBetween (date1, date2) {
    const milisinsec = 1000;
    const secinmin = 60;
    const mininhour = 60;
    const hourinday = 24;
    const diffTime = date2.getTime() - date1.getTime();
    const diffDays = Math.ceil(diffTime / (milisinsec * secinmin * mininhour * hourinday));
    return diffDays;  
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));
// daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))  // 32

const usersall = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople (usersall) {
    let users = [];
    let adultage = 18;
	usersall.forEach((user) => {
        const adultUsers = new Date().getFullYear() - new Date(user[' birthday ']).getFullYear();
        if (adultUsers >= adultage) {
            users.push(`${user[' birthday ']}`);
        }	
    });
	return users.length;
} 
console.log(getAmountOfAdultPeople(usersall));
// getAmountOfAdultPeople(usersall) // returns 3;

function keys (object) {
    let keysarr = [];
    for (let key in object) {
        if (key) {
            keysarr.push(key);
        }
    }
    return keysarr;
}
// console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
// keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

function values (object) {
    let valuesarr = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            valuesarr.push(object[key]);
        }
    }
    return valuesarr; 
}
// console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
// values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]