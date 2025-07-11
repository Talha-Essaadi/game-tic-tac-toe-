let cells = document.querySelectorAll(".cell");

let currentPlayer = "X";
let user_1_profile = document.querySelector(".user-1-image img");
const restart_button = document.querySelector(".restart-button");
let user_2_profile = document.querySelector(".user-2-image img");
user_2_profile.style.borderColor = "white";
let gameActive = true;


let statusText = document.querySelector(".status");


const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handlClick);
});

function handlClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    if (cell.textContent !== "" || !gameActive) {
        return;
    }
    cell.textContent = currentPlayer;
    checkWinner();

    if (currentPlayer === "X") {
        currentPlayer = "O";

        cell.style.color = "#00CD5A";
        user_2_profile.style.borderColor = "transparent";
        user_1_profile.style.borderColor = "white";
    }
    else {
        currentPlayer = "X";
        cell.style.color = "#6824FF";
        user_1_profile.style.borderColor = "transparent";
        user_2_profile.style.borderColor = "white";
    }





}



function checkWinner() {
    for (let condition of winConditions) {
        let [a, b, c] = condition;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameActive = false;
            statusText.textContent = `Player ${cells[a].textContent} wins!`
        }
    }

    if ([...cells].every(cell => cell.textContent !== "")) {
        statusText.textContent = "it's a draw!";
        gameActive = false;
        return;
    }
}


restart_button.addEventListener("click", () => {
    cells.forEach(cell => cell.textContent = "");
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = "";
});