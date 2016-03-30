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

}
   console.log("larger number", max(2,5));
   console.assert(max(5,10) === 8, "error");
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
console.assert(maxOfThree(1,2,3) === 3,"maxOfThree");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(x){
    "use strict";
    if (x == "a"  || x == "e" || x == "i" || x =="o" || x =="u"){
      return true;
    } else {
      return false;
    }


}
  console.log("If character is a vowel", isVowel("a"));
  console.assert(isVowel("a") === true, "error");
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

function sum(number){
    "use strict";
    var total = number.reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
  });
  console.log(total)
}
sum([1, 2, 3, 4]);

function multiply(number){
    "use strict";
    var total = number.reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue * currentValue;
  });
  console.log(total)
}
multiply([1, 2, 3, 4]);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
// I need to create a string and then return the reverse of it.
function reverse(words){
    "use strict";
 reverse = function(str){
  var result = " ";
  var wordArray = str.split(" ");
  for(var i=wordArray.length - 1; i >= 0; i--) {
    result += wordArray[i] + " ";
  }
  return result.trim();
}

    //...
}

console.log(reverse('the cat'));

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

function filterLongWords(words, i){
		var filtered = new Array();
		var j = 0;
		for(var m = 0; m < words.length; m++){
			if(words[m].length > i){
				filtered[j] = words[m];
				j++;
			}
		}
		return filtered;
	}
  var wordList = [ 'camp', 'hammock', 'castiron']
  console.log('array of words longer than integer:', filterLongWords(wordList, 5));


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var frequencies = {};
      for (var i=string.length-1; i>=0; i--){
        if (!frequencies.hasOwnProperty(string.charAt(i))){
          frequencies[string.charAt(i)] = 1;
        }else {
          frequencies[string.charAt(i)] += 1;
        }
      } return frequencies;
}
console.log('the total number of frequency is: ', charFreq('abbabcbdbabdbdbabababcbcbab'));
