// energy
// not clear

let result = "";
let number = 1;

while (number <= 24) {
  if (number % 3 === 0) {
    result += "*";
  }

  result += number;

  if (number % 5 === 0) {
    result += "*";
  }

  number++;
}

// 123*45678*91011*1213141516*171819*2021222324*
