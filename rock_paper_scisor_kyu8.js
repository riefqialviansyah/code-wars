// const rps = (p1, p2) => {
//   switch (p1) {
//     case "scissors":
//       if (p2 == "paper") {
//         return "Player 1 won!";
//       } else if (p2 == "rock") {
//         return "Player 2 won!";
//       } else if (p2 == "scissors") {
//         return "Draw!";
//       }
//       break;
//     case "paper":
//       if (p2 == "rock") {
//         return "Player 1 won!";
//       } else if (p2 == "scissors") {
//         return "Player 2 won!";
//       } else if (p2 == "paper") {
//         return "Draw!";
//       }
//       break;
//     case "rock":
//       if (p2 == "scissors") {
//         return "Player 1 won!";
//       } else if (p2 == "paper") {
//         return "Player 2 won!";
//       } else if (p2 == "rock") {
//         return "Draw!";
//       }
//       break;
//   }
// };

// console.log(rps("paper", "scissors"));

const rps = (p1, p2) => {
  if (p1 == p2) {
    return "Draw!";
  }
  const rule = { paper: "rock", rock: "scissors", scissors: "paper" };

  if (p2 == rule[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("paper", "scissors"));
