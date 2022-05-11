const object1 = {
    a: 'somestring',
    b: 42
  };

function sendAlert(value){
    alert(value)
}

function myEach(collection, callback){    
    if (collection) {
        for (const [key, value] of Object.entries(collection)) {
            callback(value)
        }    
    }
    return collection
}
// console.log(myEach(object1, sendAlert));

function triple(num){
    return num * 3
}

function myMap(collection, callback){
    const newArr = []
    if (collection) {
        for (const [key, value] of Object.entries(collection)) {
            let num = callback(value)
            newArr.push(num)
        }    
    }
    return newArr
}

console.log(myMap({one: 1, two: 2, three: 3}, triple));

function accumulate(acc, val, collection){
    return acc + val
}

function myReduce(collection, callback, acc){
    const newArr = []
    if (collection) {
        for (const [key, value] of Object.entries(collection)) {
            newArr.push(value)            
        }
        if (acc) {
            const sum = newArr.reduce(callback, acc)
            return sum
      }
      else{
          const sum = newArr.reduce(callback)
          return sum
      }
    }
    return newArr
}

console.log(myReduce({one: 1, two: 2, three: 3}, accumulate, 10));

function myEven(num){
    return num % 2 == 0
}

function myFind(collection, predicate){
    if (collection) {
        for (const [key, value] of Object.entries(collection)) {
            if (predicate(value) == true) {
                return value
            }
        }
    }
}

console.log(myFind([2,1], myEven));

function myFilter(collection, predicate){
    const numArr = []    
    if (collection) {
        for (const [key, value] of Object.entries(collection)) {
            if (predicate(value) == true){numArr.push(value)}
        }
    }
    return numArr
}

console.log(myFilter([4,2,1], myEven));

function mySize(collection){
    let count = 0
    if (collection) {
        for (const [key, value] of Object.entries(collection)) {
            count++
        }
    }
    return count
}

console.log(mySize({one: 1, two: 2, three: 3}));

function myFirst(arr, n){
    let res;
    const newArr = [...arr]
    res = newArr.shift(0);
        
    if (n) {
        let res = arr.slice(0, n); 
        return res
    }

    return res
}

// console.log(myFirst(['Jan', 'March', 'April', 'June'], 3));

function myLast(arr, n){
    let res;
    const newArr = [...arr]
    res = newArr.pop(0);
        
    if (n) {
        let res = arr.slice(-n); 
        return res
        // console.log(arr);
    }

    return res
}

console.log(myLast(['Jan', 'March', 'April', 'June']));

function myKeys(object){
    let retArr = []
    if (object) {
        for (const [key, value] of Object.entries(object)) {
            retArr.push(key)
        }
    }
    return retArr
}

console.log(myKeys({one: 1, two: 2, three: 3}));

function myValues(object){
    let retArr = []
    if (object) {
        for (const [key, value] of Object.entries(object)) {
            retArr.push(value)
        }
    }
    return retArr
}

console.log(myValues({one: 1, two: 2, three: 3}));
















