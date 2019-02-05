// return a new array that contains the elements 'warm' and 'sunny' using slice
function forecast(arr) {
  arr = arr.slice(2,4);
  return arr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// the function is supposed to return a new array made up of num copies of arr
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr = [[...arr], ...newArr];
//    newArr.push([...arr]); works exactly as previous line!
    num--;
  }
  return newArr;
}
console.log(([true, false, true], 2));

// Combine arrays with the spread operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is','fun'];
  return sentence;
}
console.log(spreadOut());

//  the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1){
    return false;
  } else {
    return true;
  }
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (var i=0; i < arr.length; i++){
    if(arr[i].indexOf(elem) ===-1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// Add Key-Value Pairs to JavaScript Objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,

};
// add three more entries
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
console.log(foods);

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// Access Property Names with Bracket Notation
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));

// Create complex multi-dimensional arrays
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',["deep"]],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]]]
];

//
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// Check if an Object has a Property
function isEveryoneHere(obj) {
  if(users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) {
    return true;
  }
  return false;
}

// Iterate Through the Keys of an Object with a for...in Statement
function countOnline(obj) {
  // change code below this line
  let counter = 0;
  for (var user in obj){
    //console.log(user); // return all users
      if (obj[user]["online"] === true){
        counter ++;
        console.log(user); // return the name of users whose online property is set to true
    }
  }
  return counter; // return the number of users whose online property is set to true
}

// return an array containing all the properties in the object it receives as an argument
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(isEveryoneHere(users));
console.log(countOnline(users));
console.log(getArrayOfUsers(users));

// Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

// addFriend function takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.
function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
