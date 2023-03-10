import renderBoards from "./render-board";

export default function dragDrop(p1, p2) {
    const allships = document.querySelector(".ships");
    if (allships.classList.contains('done')) {
        allships.parentElement.removeChild(allships);
        return; 
    }
    let axis;
    let length;
    let currShip;
    if (allships.innerHTML === "") {
        const fleet = [2, 3, 3, 4, 5];
        fleet.forEach((boat) => {
            const ship = document.createElement("div");
            ship.classList.add("ship");
            ship.style.flexDirection = "row";
            ship.setAttribute("draggable", true);
            for (let i = 0; i < boat; i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell", "hover");
                cell.addEventListener("click", () => {
                    if (cell.parentElement.style.flexDirection == "column") {
                        cell.parentElement.style.flexDirection = "row";
                    } else cell.parentElement.style.flexDirection = "column";
                });
                ship.appendChild(cell);
            }
            allships.appendChild(ship);
        });
    }
    Array.from(allships.childNodes).forEach((ship) => {
        ship.addEventListener("dragstart", () => {
            axis = ship.style.flexDirection;
            length = ship.childNodes.length;
            currShip = ship
        });
    });

    const board = document.querySelector("#player");
    const cells = board.getElementsByClassName("cell");
    Array.from(cells).forEach((cell) => {
        cell.addEventListener("dragover", (e) => e.preventDefault());
        cell.addEventListener("drop", () => {
            let direction = "horizontal";
            if (axis === "column") direction = "vertical";
            const coord = cell.id.slice(-2);
            const x = Number(coord[0]);
            const y = Number(coord[1]);
            const boat = p1.board.placeShip(length, [x, y], direction);
            if (boat === false) return;
            else {
                currShip.parentElement.removeChild(currShip);
                if (allships.innerHTML === '') allships.classList.add('done');
                renderBoards(p1, p2);
            }
        });
    });
}
