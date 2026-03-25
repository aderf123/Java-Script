const prompt = require("prompt-sync")();

let board = ["","","","","","","","",""];
let currentSymbol = "";
let round = 1;

console.log("Welcome to X and O game");
console.log("Positions:");
console.log("1 2 3\n4 5 6\n7 8 9");

while (round <= 9) {

    let position;

    while (true) {

        // First round: choose X or O
        if (round === 1) {
            let input = prompt(`Round ${round}: Enter X or O: `).toUpperCase();

            if (input === "X" || input === "O") {
                currentSymbol = input;
            } else {
                console.log("Invalid input! Enter X or O.");
                continue;
            }

        } else {
            // Switch turns
            currentSymbol = currentSymbol === "X" ? "O" : "X";
        }

        position = Number(prompt(`Round ${round}: Enter position (1-9): `));

        
        if (position < 1 || position > 9 || isNaN(position)) {
            console.log("Invalid position! Choose between 1 and 9.");
        } 
        else if (board[position - 1] !== "") {
            console.log("Position already taken! Choose another.");
        } 
        else {
            board[position - 1] = currentSymbol;
            break;
        }
    }

    
    console.log(`
${board[0] || "-"} ${board[1] || "-"} ${board[2] || "-"}
${board[3] || "-"} ${board[4] || "-"} ${board[5] || "-"}
${board[6] || "-"} ${board[7] || "-"} ${board[8] || "-"}
`);

    round++;
}