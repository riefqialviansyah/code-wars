// kyu 7
// https://www.codewars.com/kata/6627696c86b953001280675e/train/javascript

const rule = {
  ":)": 0,
  ":D": 1,
  ">(": 2,
  ">:C": 3,
  ":/": 4,
  ":|": 5,
  ":O": 6,
  ";)": 7,
  "^.^": 8,
  ":(": 9,
};

function deEmojify(emojiString) {
  // your turn now
  if (emojiString.trim() == "") {
    return "";
  }
  let arrResult = [];
  emojiString.split(" ").map((el) => {
    if (arrResult.length == 0) {
      arrResult.push([rule[el]]);
    } else if (el == "") {
      arrResult.push([]);
    } else {
      arrResult[arrResult.length - 1].push(rule[el]);
    }
  });

  return arrResult
    .map((el) => String.fromCharCode(Number(el.join(""))))
    .join("");
}

// console.log(rule);
console.log(deEmojify(":D :) :/  :D :) :|"));
console.log(
  deEmojify(
    ";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"
  )
);
