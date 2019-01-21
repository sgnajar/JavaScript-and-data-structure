// global function
var myGlobal = 10

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// local function
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);  myVar is not defined outside of the function.

// global vs local functions
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";  // will overide the outerWear value
  return outerWear;
}

myOutfit();
