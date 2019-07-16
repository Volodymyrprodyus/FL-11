function getNumbers (str) {
    let arr = str.split('');
    let temp = [];
    for(let i=0; i<arr.length; i++) {
        arr[i]=+arr[i];    
    }
    for(let j of arr) {
      j && temp.push(j); 
      arr = temp;
      delete temp[j];
    }
   return arr;
}

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

function executeforEach(array, callback) {
    for (let i=0; i <array.length; i++) {
        callback(array[i]);
    }
}

function mapArray(array, callback) {
    let resarray = [];
    function cbtmp(el) {
        resarray.push(callback(el));
    }  
    executeforEach(array, cbtmp);
    return resarray;
}

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

function showFormattedDate (date) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = date;
    let month = monthNames[d.getMonth()];
    let day = '' + d.getDate();
    let year = d.getFullYear();
return '`Date: ' +month+ ' ' +day+' '+year+'`';
}

function canConvertToDate(date) {
return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
}

function daysBetween (date1, date2) {
    const milisinsec = 1000;
    const secinmin = 60;
    const mininhour = 60;
    const hourinday = 24;
    const diffTime = date2.getTime() - date1.getTime();
    const diffDays = Math.ceil(diffTime / (milisinsec * secinmin * mininhour * hourinday));
    return diffDays;  
}

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

function getAmountOfAdultPeople(data) {
    const adult = 567648000000;
    let arr = filterArray(data, function(el) {
    let current = new Date().getTime() - new Date(el[' birthday ']).getTime();
    if(daysBetween(new Date(adult), new Date(current))>=0) {
       return el
       }
      });
  return arr.length; 
}

function keys (object) {
    let keysarr = [];
    for (let key in object) {
        if (key) {
            keysarr.push(key);
        }
    }
    return keysarr;
}

function values (object) {
    let valuesarr = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            valuesarr.push(object[key]);
        }
    }
    return valuesarr; 
}
