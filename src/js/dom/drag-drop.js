import renderBoards from "./render-board";

export default function dragDrop(p1, p2) {
    const ships = document.querySelector(".ships");
    const battleship = document.createElement("div");
    battleship.classList.add("ship");
    battleship.style.flexDirection = 'row';
    battleship.setAttribute("draggable", true);

    let axis;
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell", "hover");
        
        cell.addEventListener('click', () => {
            if (cell.parentElement.style.flexDirection == 'column') {
                cell.parentElement.style.flexDirection = 'row';
            }
            else cell.parentElement.style.flexDirection = 'column';
        })
        battleship.appendChild(cell);
    }
    battleship.addEventListener('dragstart', () => {
        axis = battleship.style.flexDirection;
    })
    ships.appendChild(battleship);

    const board = document.querySelector("#player");
    const cells = board.getElementsByClassName("cell");
    Array.from(cells).forEach((cell) => {
        cell.addEventListener("dragover", (e) => e.preventDefault());
        cell.addEventListener("drop", () => {
            let direction = 'horizontal';
            if (axis === 'column') direction = 'vertical'
            const coord = cell.id.slice(-2);
            const x = Number(coord[0]);
            const y = Number(coord[1]);
            p1.board.placeShip(5, [x, y], direction);
            renderBoards(p1, p2);
        });
    });
}
