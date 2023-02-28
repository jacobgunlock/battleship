const renderWin = require('../dom/render-win')

function processShot(shot, player, cell) {
    const target = cell.id.slice(-2)
    cell.classList.remove('active');
    if (shot === "miss") cell.classList.add("miss");
    else if (shot === true) {
        const tiles = player.board.board[target[0]][target[1]].ship.tiles;
        tiles.forEach((tile) => {
            const coord = tile.join("");
            document.getElementById(`${player.name}:${coord}`).classList.add("sunk");
            document.getElementById(`${player.name}:${coord}`).classList.remove("hit", "ship");
        });
    } else {
        cell.classList.add("hit");
        cell.classList.remove("ship");
    }
    if (player.board.isAllSunk()) {
        renderWin(player);
        return true;
    }
}
module.exports = processShot
