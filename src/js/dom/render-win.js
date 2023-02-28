function renderWin(player) {
    const cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach((cell) => {
        cell.classList.remove("active");
        const newCell = cell.cloneNode(true);
        cell.parentNode.replaceChild(newCell, cell);
    });
    
    if (player.name === "Computer") console.log("You Won!");
    else console.log("Computer Won!");
}

module.exports = renderWin;
