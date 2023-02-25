function processShot(shot, oppCell, player, i, j) {
    oppCell.classList.remove('active');
    if (shot === "miss") oppCell.classList.add("miss");
    else if (shot === true) {
        const tiles = player.board.board[i][j].ship.tiles;
        tiles.forEach((tile) => {
            coord = tile.join("");
            document.getElementById(`p2:${coord}`).classList.add("sunk");
        });
    } else oppCell.classList.add("hit");
}
module.exports = processShot
