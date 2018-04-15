// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) {

  const spaced = sen.split(" ").toString();

  const myRegex = /[a-z]+/ig;

  const matched = spaced.match(myRegex);

  const sorted = matched.sort(function(a, b) {
      return (b.length - a.length)
  });

  return sorted[0];

}

// keep this function call here
LongestWord(readline());
