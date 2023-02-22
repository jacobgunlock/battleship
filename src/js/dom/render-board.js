const p1 = require('../scripts/game');
const p2 = require('../scripts/game');
function renderBoards(p1, p2) {
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('div');
        row.classList.add('row-p1');
        document.getElementById('player-board').appendChild(row);
        
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', `${(i,j)}`); 
            row.appendChild(cell);         
        }
    }
}

module.exports = { renderBoards };