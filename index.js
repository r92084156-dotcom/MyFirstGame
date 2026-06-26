const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

let currentPlayer = "X";
let gameActive = true;
let board = ["","","","","","","","",""];

const winConditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell => {
cell.addEventListener("click", cellClick);
});

function cellClick(){
const index = this.getAttribute("data-index");

if(board[index] !== "" || !gameActive){
return;
}

board[index] = currentPlayer;
this.textContent = currentPlayer;

checkWinner();

if(gameActive){
currentPlayer = currentPlayer === "X" ? "O" : "X";
statusText.textContent = "Player " + currentPlayer + " Turn";
}
}

function checkWinner(){

for(let condition of winConditions){
let [a,b,c] = condition;

if(board[a] && board[a] === board[b] && board[a] === board[c]){

popupText.textContent = "Player " + currentPlayer + " Wins!";
popup.style.display = "flex";

gameActive = false;
return;
}
}

if(!board.includes("")){
popupText.textContent = "Game Draw!";
popup.style.display = "flex";
gameActive = false;
}

}

function restartGame(){

board = ["","","","","","","","",""];
currentPlayer = "X";
gameActive = true;

statusText.textContent = "Player X Turn";

cells.forEach(cell => cell.textContent = "");

popup.style.display = "none";

}