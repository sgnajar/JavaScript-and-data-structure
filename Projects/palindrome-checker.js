/*
JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
*/

function palindrome(str) {
  var lstr = str.toLowerCase(str); // convert str to lowercase
  var filtered_str = lstr.replace(/\W|\_|\*|/gi,""); //remove unwanted from lowercase
  var rev_fil_str = filtered_str.split("").reverse().join(""); //reverse

  if(filtered_str === rev_fil_str){ //check if filtered_str is the same as reverse str
    return true;
  } else {
    return false;
  }
}

//this solution performs at minimum 7x better, at maximum infinitely better.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0
  let back = str.length - 1

  //back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    //increments front pointer if current character doesn't meet criteria
    if ( str[front].match(/[\W_]/) ) {
      front++
      continue
    }
    //decrements back pointer if current character doesn't meet criteria
    if ( str[back].match(/[\W_]/) ) {
      back--
      continue
    }
    //finally does the comparison on the current character
    if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
    front++
    back--
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true

}
