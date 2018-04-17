// Have the function AlphabetSoup(str) take the str string parameter being passed
// and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) {

  var arr = str.split("");
  var sorted = arr.sort(function(a, b) {
      return (a.charCodeAt(0)) - (b.charCodeAt(0));
  })

  var alpha = sorted.toString();
  var alphaFinished = alpha.replace(/,/g, "")

  return alphaFinished;

}

// keep this function call here
AlphabetSoup(readline());
