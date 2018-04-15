// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space. 


function LetterCapitalize(str) {

  myRegex = /\b[a-z]/gi

  function upper(char) {
      return char.toUpperCase();
  }

  var complete = str.replace(myRegex, upper)

  return complete;

}

// keep this function call here
LetterCapitalize(readline());
