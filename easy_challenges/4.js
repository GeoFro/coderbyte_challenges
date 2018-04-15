// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) {

    myRegex = /[a-z]/gi
    myRegexTwo = /[a|e|i|o|u]/gi

    lower = str.toLowerCase();

    var addOne = lower.replace(myRegex, function(character) {
        return ( character === 'z') ? 'a' : String.fromCharCode(character.charCodeAt() +1 )
    });

    var caps = addOne.replace(myRegexTwo, function(letter) {
        return letter.toUpperCase();
    });

    return caps;

};

// keep this function call here
LetterChanges(readline());
