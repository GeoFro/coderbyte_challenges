// Have the function KaprekarsConstant(num) take the num parameter being passed
// which will be a 4-digit number with at least two distinct digits.
// Your program should perform the following routine on the number:
// Arrange the digits in descending order and in ascending order
// (adding zeroes to fit it to a 4-digit number), and subtract the smaller
// number from the bigger number. Then repeat the previous step.
// Performing this routine will always cause you to reach a fixed number: 6174.
// Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174).
// Your program should return the number of times this routine must be performed until 6174 is reached.
// For example: if num is 3524 your program should return 3 because of the following steps:
// (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 


function KaprekarsConstant(num) {

  var descLength = function(descNum) {

    var descLengthValue = descNum.length;

    if (descLengthValue === 1) {
        descNum = descNum + "000";
    }

    if (descLengthValue === 2) {
        descNum = descNum + "00";
    }

    if (descLengthValue === 3) {
        descNum = descNum + "0";
    }

    return descNum;
  };

  var ascLength = function(ascNum) {

    var ascLengthValue = ascNum.length;

    if (ascLengthValue === 1) {
        ascNum = "000" + ascNum;
    }

    if (ascLengthValue === 2) {
        ascNum = "00" + ascNum;
    }

    if (ascLengthValue === 3) {
        ascNum = "0" + ascNum;
    }

    return ascNum;
  };



  var descGenerator = function(testDigit) {
    let descArr = testDigit.toString().split("")
    let descArrSort = descArr.sort(function(a, b) {
        return b - a
    });

    var computedDesc = descArrSort.toString().replace(/,/g, "");
    return descLength(computedDesc);

  }

  var ascGenerator = function(testDigit) {
    let ascArr = testDigit.toString().split("")
    let ascArrSort = ascArr.sort(function(a, b) {
        return a - b
    });

    var computedAsc = ascLength(ascArrSort.toString().replace(/,/g, ""));
    return ascLength(computedAsc);
  }

  let desc = descGenerator(num);

  let asc = ascGenerator(num);

  var counter = 1;

  while( (desc - asc) !== 6174) {
      result = desc - asc;

      desc = descGenerator(result);
      asc = ascGenerator(result);
      counter++;

  }

  return counter;

}

// keep this function call here
KaprekarsConstant(readline());
