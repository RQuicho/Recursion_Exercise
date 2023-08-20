/** product: calculate the product of an array of numbers. */
// product([2,3,4]) // 24
function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i+1);

  // for(let n of nums) {
  //   if (Array.isArray(nums)) {
  //     product(n)
  //   } else {
  //     product()
  //     console.log(nums[i] * nums[i+1]);
  //   }
  // }
}
product([2,3,4])
console.log(product([2,3,4]));

/////////////////////////////////////////////////////////////////////////////

/** longest: return the length of the longest word in an array of words. */
// longest(["hello", "hi", "hola"]) // 5
function longest(words, i=0, maxCharCount=0) {
  if (i === words.length) return maxCharCount;
  maxCharCount = Math.max(words[i].length, maxCharCount);
  return longest(words, i+1, maxCharCount);

  // for (i=0; i<words.length; i++) {
  //   let maxCharCount = Math.max(words[i].length);
  //   console.log(maxCharCount);
  // }
  
  // Math.max(length of word 1, length of word 2, length of word 3)
  // Math.max(...countArray)

}
longest(["hello", "hi", "hola"]);
console.log(longest(["hello", "hi", "hola"]));

/////////////////////////////////////////////////////////////////////////////

/** everyOther: return a string with every other letter. */
// everyOther('hello') // 'hlo'
function everyOther(str, i=0, newStr='') {
  if (i >= str.length) return newStr;
  newStr = newStr + str[i];
  return everyOther(str, i+2, newStr);
  // console.log(str[0]);
  // console.log(str[0] + str[2]);
}
everyOther("hello");
console.log(everyOther("hello"));

/////////////////////////////////////////////////////////////////////////////

/** isPalindrome: checks whether a string is a palindrome or not. */
// isPalindrome('tacocat') // true
// isPalindrome('tacodog') // false
function isPalindrome(str, i=0) {
  let leftIdx = i;
  let rightIdx = str.length - 1 - i;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] != str[rightIdx]) return false;
  return isPalindrome(str, i+1);
  // if (str >= reversedStr) return true;
  // let strArray = str.split('');
  // reversedStr = strArray.reverse().join('');
  // return isPalindrome(str, reversedStr);
}
isPalindrome('tacocat');
console.log(isPalindrome('tacocat'));
isPalindrome('tacodog');
console.log(isPalindrome('tacodog'));

/////////////////////////////////////////////////////////////////////////////

/** findIndex: return the index of val in arr (or -1 if val is not present). */
// let animals = ["duck", "cat", "pony"];

// findIndex(animals, "cat");  // 1
// findIndex(animals, "porcupine");   // -1
function findIndex(arr, val, i=0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i+1);
}
let animals = ["duck", "cat", "pony"];
findIndex(animals, "cat");
console.log(findIndex(animals, "cat"));
findIndex(animals, "porcupine");
console.log(findIndex(animals, "porcupine"));


/////////////////////////////////////////////////////////////////////////////

/** revString: return a copy of a string, but in reverse. */
// revString("porcupine") // 'enipucrop'
function revString(str, i=0, newStr='') {
  if (i >= str.length) return newStr;
  newStr = newStr + str[str.length - 1 - i];
  return revString(str, i+1, newStr);
}
revString("porcupine");
console.log(revString("porcupine"));

/////////////////////////////////////////////////////////////////////////////

/** gatherStrings: given an object, return an array of all of the string values. */
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

// gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];
function gatherStrings(nestedObj, arrayOfStrings=[]) {
  for (let val of Object.values(nestedObj)) {
    // console.log(val);
    if (typeof val === "string") {
      arrayOfStrings.push(val);
    } else if (typeof val === "object") {
      gatherStrings(val, arrayOfStrings);
    }   
  }
  return arrayOfStrings; 
  
  // for (let key of obj) {
  //   if (typeof key[val] !== "string") return arrayOfStrings;

  // }
   // if (Object.values(nestedObj))
  //  console.log(Object.values(nestedObj));
  
  // Object.values("foo"); // ['f', 'o', 'o'] (returns an array)

  // typeof 'Lester' // "string"
  // typeof 22 // "number"
  // typeof true // "boolean"
}
gatherStrings(nestedObj);
console.log(gatherStrings(nestedObj));

/////////////////////////////////////////////////////////////////////////////

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// binarySearch([1,2,3,4],1) // 0
// binarySearch([1,2,3,4],3) // 2
// binarySearch([1,2,3,4],5) // -1

function binarySearch(arr, val, i=0) {
  const value = (element) => element === val;
  let foundIndex = arr.findIndex(value);
  if (i >= arr.length) return foundIndex;
  if (arr[i] !== val) {
    binarySearch(arr, val, i+1)
  }
  return foundIndex;
}
binarySearch([1,2,3,4],1);
console.log(binarySearch([1,2,3,4],1));
binarySearch([1,2,3,4],3);
console.log(binarySearch([1,2,3,4],3));
binarySearch([1,2,3,4],5);
console.log(binarySearch([1,2,3,4],5));


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
