//Create an anonymous fucntion and set it equal to a variable.
let arr = ['Elocution', 21, 'Clean teeth', 100];
let anonymous = function(x){
  if (isNaN(x)) {
    return "ARRR!"
  } else {
  return x * 3;
  }
}
console.log(arr.map(anonymous));
//SECOND WAY TO DO IT, PROBABLY BETTER
let anonymou = function(par){
  if (typeof par === 'number'){
    return par * 3;
  } else if (typeof par === 'string') {
    return 'ARRR!';
  } else {
    return par;
  }
 }
 console.log(arr.map(anonymou));

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */



/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

