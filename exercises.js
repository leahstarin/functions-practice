/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
    "use strict";
    if (a > b ) {
      return a;
    } else {
     return b;
    }
    //...
}
console.assert(max([a,b]) === b, "error";
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    if (a > b && a > c) {
      return a;
    } else if (b > c){
      return b;
    } else {
      return c;
    }

    //...
}
console.assert( maxOfThree([a,b,c]) === c,"maxOfThree":

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if (x == "a"  || x == "e" || x == "i" || x =="o" || x =="u"){
      return true;
    } else {
      return false;
    }

 console.assert

    //...
}

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var splitPhrase = phrase.split('')
    var newPhrase = ""
    splitPhrase.forEach(function(char){
     if (char == "a"  || char == "e" || char == "i" || char =="o" || char =="u") {
       newPhrase += char;

     } else {
       char = char + 'o' + char;
       newPhrase += char;

      }
    })
    return newPhrase;
}
console.log(rovarspraket("string"))

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //...
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var length = 0;
    for(var i=0; i<words.length; i++){
      if (words[i].length > length) {
        length = words[i].length
      }
      return length;
    }
}

  console.log(findLongestWord(['Hannah', 'Leah', 'Jake']));
  console.assert(findLongestWord(['Hannah', 'Leah', 'Jake']) === 6, ' error')

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(string){
    "use strict";

}


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
