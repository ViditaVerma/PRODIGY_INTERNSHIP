


// let turn = "X";
// let isGameOver = false;

// // Function to change turn
// const changeTurn = () => {
//   return turn === "X" ? "O" : "X";
// };

// // Function to check win
// const checkWin = () => {
//   const boxtexts = document.getElementsByClassName("boxtext");
//   const wins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];

//   wins.forEach(e => {
//     if (
//       boxtexts[e[0]].innerText !== "" &&
//       boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
//       boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
//     ) {
//       document.querySelector(".info").innerText = `${boxtexts[e[0]].innerText} Wins! 🎉`;
//       isGameOver = true;
//     //   document.querySelector(".image").getElementsByTagName('img')[0].style.width= '300px';
//        document.getElementById("winGif").style.display = "block";
//        document.getElementById("loseGif").style.display = "none";
//     }
//   });
// };

// // Main game logic
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element => {
//   let boxtext = element.querySelector(".boxtext");
//   element.addEventListener("click", () => {
//     if (boxtext.innerText === "" && !isGameOver) {
//         document.getElementById("winGif").style.display = "none";//added
//             document.getElementById("loseGif").style.display = "block";//added
//       boxtext.innerText = turn;
//       turn = changeTurn();
//       checkWin();
//       if (!isGameOver) {
//         document.querySelector(".info").innerText = `Turn for ${turn}`;
//       }
//     }
//   });
// });

// // Reset Button
// document.getElementById("reset").addEventListener("click", () => {
//   let boxtexts = document.querySelectorAll(".boxtext");
//   Array.from(boxtexts).forEach(element => {
//     element.innerText = "";
//   });
//   turn = "X";
//   isGameOver = false;
//   document.querySelector(".info").innerText = "Turn for X";
// //   document.querySelector(".image").getElementsByTagName('img').style.display= none;
//   document.getElementById("winGif").style.display = "none";
//     document.getElementById("loseGif").style.display = "none";
// });
let turn = "X";
let isGameOver = false;

// Function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check win
const checkWin = () => {
  const boxtexts = document.getElementsByClassName("boxtext");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText !== "" &&
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText
    ) {
      document.querySelector(".info").innerText = `${boxtexts[e[0]].innerText} Wins! 🎉`;
      isGameOver = true;

      // Show win GIF
      document.getElementById("winGif").style.display = "block";
      document.getElementById("loseGif").style.display = "none";
    }
  });

  // If all boxes filled and no winner => draw
  const allFilled = Array.from(boxtexts).every((box) => box.innerText !== "");
  if (!isGameOver && allFilled) {
    document.querySelector(".info").innerText = "It's a Draw 😿";
    isGameOver = true;

    // Show lose/draw GIF
    document.getElementById("winGif").style.display = "none";
    document.getElementById("loseGif").style.display = "block";
  }
};

// Main game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isGameOver) {
      boxtext.innerText = turn;
      checkWin();
      if (!isGameOver) {
        turn = changeTurn();
        document.querySelector(".info").innerText = `Turn for ${turn}`;
      }
    }
  });
});

// Reset Button
document.getElementById("reset").addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  boxtexts.forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector(".info").innerText = "Turn for X";

  // Hide both GIFs
  document.getElementById("winGif").style.display = "none";
  document.getElementById("loseGif").style.display = "none";
});
