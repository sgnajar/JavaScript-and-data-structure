// regex - test
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// regex - match
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
