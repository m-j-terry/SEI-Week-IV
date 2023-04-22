const string = 'The quick brown fox jumps over the lazy dog'
const charFrequency = {}
function charCount(str) {
  str = str.toLowerCase().replaceAll(' ', '')
  for (let i = 0; i < str.length; i++) {
    if (charFrequency[str[i]]) {
      charFrequency[str[i]] += 1
    } else {
      charFrequency[str[i]] = 1
    }
  }
  return charFrequency
}

console.log(charCount(string))


//create a string to modify 
//create an empty object to store the key-value pairs for letters and frequency inside of.
//define the function with a parameter for string
//use toLowerCase and replaceAll to set all letters to lowercase and trim spaces.
//run a for loop to iterate over each letter of the string. 
//for each iteration, the loop will follow the logic that if the empty object contains the the same string-key as the iterated string letter, it will add one to that key's value. If the empty object does not contain the iterated letter, which it will not initially, the loop will store that letter as a key and set its value equal to one.
//at the end of the loop, once each letter has been iterated through and stored in charFrequency, the function will return the object charFrequency, so that when it is logged, it will return the 'answer'.