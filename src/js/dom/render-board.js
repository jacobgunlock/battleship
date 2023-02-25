const p1 = require('../scripts/game');
const p2 = require('../scripts/game');
const processShot = require('./process-shot')

function renderBoards(p1, p2) {
    for (let i = 0; i < 10; i++) {
        //p1
        const row = document.createElement('div');
        row.classList.add('row', 'p1');
        document.getElementById('player').appendChild(row);
        //p2
        const oppRow = document.createElement('div');
        oppRow.classList.add('row', 'p2');
        document.getElementById('enemy').appendChild(oppRow);
        
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            if (p1.board.board[i][j].ship !== null) cell.classList.add('ship');
            cell.setAttribute('id', `p1:${i}${j}`); 
            row.appendChild(cell);   
            
            const oppCell = document.createElement('div');
            oppCell.classList.add('cell','active');
            oppCell.setAttribute('id', `p2:${i}${j}`);
            oppRow.appendChild(oppCell);

            oppCell.addEventListener('click', () => {
                const shot = p2.board.receiveAttack(oppCell.id[3], oppCell.id[4])
                processShot(shot, oppCell, p2, i, j);
            }, { once: true });
        }
    }
}
module.exports = { renderBoards };
