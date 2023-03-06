export default function renderWin(player) {
    const cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach((cell) => {
        cell.classList.remove("active");
        const newCell = cell.cloneNode(true);
        cell.parentNode.replaceChild(newCell, cell);
    });
    const winner = document.querySelector('.winner');
    winner.classList.remove('hidden');
    if (player.name === "Computer") winner.innerHTML = "You Won!";
    else winner.innerHTML = "Computer Won!";
}
