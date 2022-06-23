// console.log("--------Ques1------");

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];
// console.log(numbers);
// console.log(numbers[4]);

// console.log("--------Ques2------");

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// function checkExMark(str) {
//   if (str.slice(-1) === "!") {
//     console.log(true);
//   } else console.log(false);
// }

// checkExMark(str1);
// checkExMark(str2);

("Answer Key");
// str1.endsWith("!"); // true
// str2.endsWith("!"); // false

// console.log("--------Ques3------");

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty("Herman"));

// console.log("--------Ques4------");

// let munstersDescription = "the Munsters are CREEPY and Spooky.";

// function fix(str) {
//   let lowerCase = str.slice(1, -1).toLowerCase();
//   let capital = str.slice(0, 1).toUpperCase();
//   let combined = capital + lowerCase;
//   return combined;
// }

("answer key ");
// console.log(
//   munstersDescription.charAt(0).toUpperCase() +
//     munstersDescription.substring(1).toLowerCase()
// );

// console.log("--------Ques5------");

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// let finalAges = Object.assign(ages, additionalAges);
// console.log(finalAges);

// console.log("--------Ques6------");

// let str1 =
//   "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// function check(str) {
//   return str.includes("Dino") ? true : false;
// }

// /* or

// str1.match('Dino') !== null; // false
// str2.match('Dino') !== null; // true

// */

// console.log(check(str1));
// console.log(check(str2));

// console.log("--------Ques7------");

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push("Dino", "Hoppy");
// console.log(flintstones);

// console.log("--------Ques8------");

// let advice =
//   "Few things in life are as important as house training your pet dinosaur.";

// //answer
// console.log(advice.slice(0, advice.indexOf("house")));

// console.log("--------Ques------");
(".replace()");

// let advice =
//   "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.replace("important", "urgent"));

// console.log("--------Ques------------------------------");
(".unshift()");

// let numbers = [1, 2, 3, 4, 5];
// // let reversedArray = numbers.slice().reverse();
// // console.log(reversedArray); // [5, 4, 3, 2, 1]
// // console.log(numbers); // [1, 2, 3, 4, 5]

// let reversedArray = [];

// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]

// console.log("--------Ques------------------------------");
(".includes");
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8; // false
// let number2 = 95; // true

// // answer key
// numbers.includes(number1); // => false
// numbers.includes(number2); // => true

// console.log("--------Ques------------------------------");
(".concat");
// let famousWords = "seven years ago...";

// let words = "Four score and";

// let combined = words.concat(famousWords);

// console.log(combined);
// console.log("Four score and " + famousWords);

// console.log("--------Ques------------------------------");
("spice, remove one element");
// let array = [1, 2, 3, 4, 5];

// // removes 3
// let removeIndex = array.splice(2, 1);

// console.log(array); // 1 2 4 5

// console.log("--------Ques------------------------------");
("concat, ... spread, flat");
// let flintstones = ["Fred", "Wilma"];
// let add1 = ["Barney", "Betty"];
// let add2 = ["Bambam", "Pebbles"];

// let combined = [...flintstones, ...add1, ...add2];
// console.log(combined);

// console.log(flintstones.concat(add1, add2));

// console.log("--------Ques------------------------------");
(".filter(), .entries()");
// let flintstones = {
//   Fred: 0,
//   Wilma: 1,
//   Barney: 2,
//   Betty: 3,
//   Bambam: 4,
//   Pebbles: 5,
// };

// Object.entries(flintstones)
//   .filter((pair) => pair[0] === "Barney")
//   .shift();

// console.log("--------Ques------------------------------");
("Array.isArray()");

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// console.log("--------Ques------------------------------");
(".floor, .padStart()");
// let title = "Flintstone Family Members";

// let padding = Math.floor((40 - title.length) / 2);

// centers
// console.log(title.padStart(padding + title.length));

// console.log("--------Ques------------------------------");
(".split(), filter()");

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// split turns each letter to an element
// .filter checks each element for the t and returns each t element
// console.log(statement1.split("").filter((char) => char === "t"));

// console.log("--------Ques------------------------------");
let numbers = [1, 2, 3, 4];

// method 1 : splice
// splices all elements in array and returns
// console.log(numbers.splice(0, numbers.length));
// splicing mutates orginal array
// console.log(numbers); // [] emtpy array

// method 2 : a.length = 0
// console.log((numbers.length = 0));
// console.log(numbers);

// method 3: .pop() loop
// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);

// medthod 4 : .shift() loop
// while (numbers.length > 0) {
//   numbers.shift();
// }
// console.log(numbers);

// method 5 : = empty array
// let emptyArr = [];
// numbers = emptyArr;
// console.log(numbers);

// console.log("--------Ques------------------------------");

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);

// console.log(arr1[0]);

// console.log("--------Ques------------------------------");

function isColorValid(color) {
  return color === "blue" || color === "green" ? 0 : 1;
}

console.log(isColorValid("red"));
console.log(isColorValid("green"));
