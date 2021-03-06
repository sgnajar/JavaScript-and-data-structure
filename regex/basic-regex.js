// regex - test
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// regex - match
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// Regular Expressions: Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex);

// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

// Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

// Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

/*
1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
*/
let username = "JackOfAllTrades";
let userCheck = /\D{2,}/i;
let result = userCheck.test(username);

// look for multiple whitespace characters in a string.
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// Check for All or None
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

// capture groups in regex to match numbers that are repeated only three times in a string, each separated by a space. 
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
