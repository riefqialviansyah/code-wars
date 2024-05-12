function grille(message, code) {
  let biner = code.toString(2);
  let binerArr = biner.split("");
  let messageArr = message.split("");
  let diff = messageArr.length - binerArr.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      binerArr.unshift("0");
    }
  } else {
    for (let i = 0; i < Math.abs(diff); i++) {
      messageArr.unshift("-");
    }
  }

  let result = [];
  for (let i = 0; i < binerArr.length; i++) {
    if (binerArr[i] == 1 && messageArr[i] != "-") {
      result.push(messageArr[i]);
    }
  }
  console.log(binerArr, messageArr);
  return result.join("");
}

// console.log(grille("abcdef", 5));
// console.log(grille("", 5)); //""
// console.log(grille("abc", 1)); //"c"
// console.log(grille("tcddoadepwweasresd", 77098)); //, "codewars");
// console.log(grille("ab", 255)); //, "ab");
console.log(grille("ab", 256)); //, "");
console.log(grille("abcde", 32)); //, "");
