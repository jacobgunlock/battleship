import renderBoards from './render-board'

export default function dragDrop(p1, p2) {
    const ships = document.querySelector(".ships");
    const battleship = document.createElement("div");
    battleship.classList.add("ship");
    battleship.setAttribute("draggable", true);
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", "hover");
        battleship.appendChild(cell);
    }
    ships.appendChild(battleship);

    const board = document.querySelector("#player");
    battleship.addEventListener("mousedown", () => {
        board.classList.add("hover");
    });

    const cells = board.getElementsByClassName("cell");
    Array.from(cells).forEach((cell) => {
        cell.addEventListener("dragover", (e) => e.preventDefault());
        cell.addEventListener("drop", () => {
            const coord = cell.id.slice(-2);
            const x = Number(coord[0]);
            const y = Number(coord[1]);
            p1.board.placeShip(5, [x, y], "horizontal");
            console.log(p1.board.getShipCount());
            renderBoards(p1, p2);
        });
    });
}
