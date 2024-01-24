// Accepted at 24 January 2024
// Mohammad Fauzan Nabil

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "draw"
//   }

//   if (p1 === "rock" && p2 === "scissors") {
//     return "player 1 Won"
//   } else if (p1 === "paper" && p2 === "rock") {
//     return "player 1 Won"
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return "player 1 Won"
//   } else {
//     return "player 2 won"
//   }
// }

// console.log(rps("rock", "paper"))

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!"

  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  }

  if (rules[p1] === p2) {
    return "Player 1 won!"
  } else {
    return "Player 1 won!"
  }
}
