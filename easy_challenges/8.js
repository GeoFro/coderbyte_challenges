// Have the function CheckNums(num1,num2) take both parameters being passed and
// return the string true if num2 is greater than num1, otherwise return the string false. 
// If the parameter values are equal to each other then return the string -1.

function CheckNums(num1,num2) {

    if ((num1 - num2) > 0) { return false }
    if ((num1 - num2) < 0) { return true }
    if (num1 === num2) { return -1 }

}

// keep this function call here
CheckNums(readline());
