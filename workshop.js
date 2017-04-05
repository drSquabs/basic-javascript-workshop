function firstLetter(inputString) {
    if (inputString) {
        return inputString[0];
    } else {
        return undefined;
    }
}

function lastLetter(inputString) {
    if (inputString) {
        return inputString[inputString.length-1];
    } else {
        return undefined;
    }
}

function letterAtPosition(inputString, position) {
    if (inputString) {
        return inputString[position];
   } else if ("") {
        return undefined;
    } else {
        return undefined;
    }
}

function addTwoNumbers(num1, num2) {
    if (typeof (num1) === "number" && typeof(num2) === "number"){
        return num1 + num2;
    } else {
        return undefined;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (typeof (num1) === "number" && typeof(num2) === "number"){
        return num1 * num2;
    } else {
        return undefined;
    }
        
}

function calculator(operation, num1, num2) {
    if (typeof (num1) === "number" && typeof(num2) === "number"){
        switch (operation){
            case 'add':
                return num1 + num2;

            case 'sub':
                return num1 - num2;

            case 'mult':
                return num1 * num2;

            case 'div':
                return num1 / num2;

            default: 
                undefined;
        }
    } 
}


function repeatString(inputString, numRepetitions) {
    if (inputString != "" && numRepetitions > 0){
        return inputString.repeat(numRepetitions);
    }
    else if (numRepetitions < 0){
        return "";
    } else if (inputString === ""){
        return "";
    } else {
        return "";
    }
}

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function longestWord(inputString) {
    var strSplit = inputString.split(" ");
    var longWordCharNum;
    var length = 1;
    if (inputString){
       for (var i = 0; i < strSplit.length; i++){
           if (strSplit[i].length > length) {
               longWordCharNum = strSplit[i];
               length = strSplit[i].split[i];
           } 
        } return longWordCharNum;
    } else if (inputString === ""){
        return "";
    }
     
} 


function capitalize(inputString) {
    inputString = inputString.toLowerCase().split(" ");
    for (var i = 0; i < inputString.length; i++){
        inputString[i] = inputString[i].charAt(0).toUpperCase() + inputString[i].slice(1);
    }
    return inputString.join(' ');
}

function sumOfNumbers(arrayOfNumbers) {
    if (arrayOfNumbers.length > 0) {
        var count = 0;
        for (var i = 0; i < arrayOfNumbers.length; i++){
            if(typeof(arrayOfNumbers[i]) === 'number'){
                count += arrayOfNumbers[i];
            } else {
                return undefined;
            }
        } return count;
    } else if(arrayOfNumbers.length === 0){
        return 0;
    } else {
        return undefined;
    }
}

function uniqueElements(array1, array2) {
if(typeof (array1) === "object" && typeof (array2) === "object") {
 var newArr = [];
 
  array1.forEach(function(val){
   if(array2.indexOf(val) < 0) newArr.push(val);
  });

  array2.forEach(function(val){
   if(array1.indexOf(val) < 0) newArr.push(val);
  });

  return newArr;
    } else {
        return undefined;
    }
}


function isPalindrome(inputString) {
    inputString = inputString.toLowerCase().replace(/[&\/\\#,+()$~%.\s\-'":*?<>{}]/g, '');
    return inputString == inputString.split('').reverse().join('');
    
}

function wrapCharacter(inputString) {
    
}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {
    
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};