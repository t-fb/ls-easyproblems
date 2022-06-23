"padstart(), for loop";
// let sentence = "The Flintstones Rock!";

// // console.log(sentence.padStart());

// for (i = 0; i < 10; i++) {
//   console.log(sentence.padStart(sentence.length + i, " "));
// }

// // answer key
// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }

// console.log("--------Ques------------------------------");
"split, map";

// let munstersDescription = "The Munsters are creepy and spooky.";

// console.log(
//   munstersDescription
//     .split("")
//     .map(function (char) {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join("")
// );
// // `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// console.log("--------Ques------------------------------");

// function first() {
//   return {
//     prop1: "hi there",
//   };
// }

// function second() {
//   return;
//   {
//     prop1: "hi there";
//   }
// } // undefined

// console.log(first());
// console.log(second());

// console.log("--------Ques------------------------------");

// let object = { first: [1] };
// let numArray = object["first"]; // 1
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); // [1,2 ]

// console.log("--------Ques------------------------------");

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// // shadowes global variable
// messWithVars(one, two, three);

// // from global variable
// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
// //-------------------------------------------

// // mutatues array the global array
// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // 2
// console.log(`two is: ${two}`); // 3
// console.log(`three is: ${three}`); // 1

// console.log("--------Ques------------------------------");

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

let egIP = 104511;

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress(egIP));
console.log(isDotSeparatedIpAddress("ABS"));
