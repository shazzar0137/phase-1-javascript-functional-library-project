function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === "object" && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection; // Return the original collection to pass the test
  }
    function myMap(collection, callback) {
        const newArray = [];
        myEach(collection, (element) => {
        newArray.push(callback(element));
        });
        return newArray;
    }  
    function myReduce(collection, callback, acc) {
        let result = acc;
        myEach(collection, (element) => {
        if (result === undefined) {
            result = element;
        } else {
            result = callback(result, element);
        }
        });
        return result;
    }
function myMap(collection, callback) {
    let newArray = [];
  
    for (let value of Object.values(collection)) {
      newArray.push(callback(value));
    }
  
    return newArray;
  }
  
// function myReduce(array, callback, initialValue) {
//   let total = initialValue;
//   for (let i = 0; i < array.length; i++) {
//     total = callback(total, array[i]);
//   }
//   return total;
// }
function myReduce(collection, callback, initialValue) {
    let values = Object.values(collection); // Works for both arrays and objects
    let total = initialValue !== undefined ? initialValue : values[0]; 
  
    for (let i = initialValue !== undefined ? 0 : 1; i < values.length; i++) {
      total = callback(total, values[i]);
    }
  
    return total;
  }
    // function myFind(collection, predicate) {
    //     for (let value of Object.values(collection)) {
    //       if (predicate(value)) {
    //         return value;
    //       }
    //     }
    //   }  
function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}
function myFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// function mySize(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     count++;
//   }
//   return count;
// }
function mySize(collection) {
  return Object.keys(collection).length;
}
  
function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}
function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(array.length - n);
  }
}
function myKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
function myValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
function myFunctions(object) {
  const functions = [];
  for (const key in object) {
    if (typeof object[key] === 'function') {
      functions.push(key);
    }
  }
  return functions;
}