/* a function to validate US phone number
 Return true if the passed string looks like a valid US phone number.
US phone number examples:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
this code will validate all of them.
*/

function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
