/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

// Vowel Function
function isVowel(a){
    if(a.length != 1) return false;
    switch (a) {
        case "a":
            return true;
        case "e":
            return true;
        case "i":
            return true;
        case "o":
            return true;
        case "u":
            return true;
        default:
            return false;
    }
}

// Sum Function
function sum(arr){
    let total = 0;
    arr.forEach(element => {
        total+= element;
    });
    return total;
}

// multiply Function
function multiply(arr){
    let total = 1;
    arr.forEach(element => {
        total*= element;
    });
    return total;
}

// reverse Function
function reverse(a){
    return a.split("").reverse().join("");
}

// longest word Function
function findLongestWord(arr){
    let max = arr[0];
    arr.forEach(element => {
        if(max.length <= element.length) max = element;
    });
    return max;
}

// filterLongWords Function
function filterLongWords(arr,i){
    let ret = arr.filter( x => x.length > i);
    return ret;
}

//jsfiddle 
function jsfiddle(){
    const a = [1,3,5,3,3]; 
    const b = a.map(function(elem, i, array) {
    return elem * 10;
    })
    console.log(b.toString());
    const c = a.filter(function(elem, i, array){
    return elem !== 3;});
    console.log(c.toString());
    const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue + elem;
    });
    console.log(d);

    // const d2 = a.find(function(elem) {return elem > 1;}); //3
    // const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
    // console.log(d2);
    // console.log(d3);
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel('q') is false  " + myFunctionTest(false, isVowel("q")));

console.log("Expected output of isVowel('u') is false  " + myFunctionTest(false, isVowel("u")));

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
console.log("Expected output of sum([1,2,3,5]) is 10  " + myFunctionTest(10, sum([1,2,3,5 ])));

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));
console.log("Expected output of multiply([1,2,3,5]) is 24  " + myFunctionTest(24, multiply([1,2,3,5])));

console.log("Expected output of reverse('1234') is '4321'  " + myFunctionTest("4321", reverse("1234")));
console.log("Expected output of reverse('hello') is 'olleh'  " + myFunctionTest("olleh", reverse("hello")));

console.log("Expected output of reverse('abc') is 'abc'  " + myFunctionTest("abc", reverse("abc")));

console.log("Expected output of findLongestWord(['Hello','World!','Hi']) is 'World!'  " + myFunctionTest("World!", findLongestWord(["Hello","World!","Hi"])));
console.log("Expected output of findLongestWord(['Hello','World!','Hi']) is 'Hi'  " + myFunctionTest("Hi", findLongestWord(["Hello","World!","Hi"])));

console.log("Expected output of filterLongWords(['Hello','World!','Hi'],4) is '['Hello','World!']  " + myFunctionTest(JSON.stringify(["Hello","World!"]), JSON.stringify(filterLongWords(["Hello","World!","Hi"],4))));
console.log("Expected output of filterLongWords(['Hello','World!','Hi'],4) is '['World!']  " + myFunctionTest(JSON.stringify(["World!"]), JSON.stringify(filterLongWords(["Hello","World!","Hi"],4))));

jsfiddle();