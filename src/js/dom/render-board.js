const p1 = require('../scripts/game');
const p2 = require('../scripts/game');
const processShot = require('./process-shot')

function renderBoards(p1, p2) {
    for (let i = 0; i < 10; i++) {
        //p1
        const row = document.createElement('div');
        row.classList.add('row');
        document.getElementById('player').appendChild(row);
        //p2
        const oppRow = document.createElement('div');
        oppRow.classList.add('row');
        document.getElementById('enemy').appendChild(oppRow);
        
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            if (p1.board.board[i][j].ship !== null) cell.classList.add('ship');
            cell.setAttribute('id', `${p1.name}:${i}${j}`); 
            row.appendChild(cell);   
            
            const oppCell = document.createElement('div');
            oppCell.classList.add('cell','active');
            oppCell.setAttribute('id', `${p2.name}:${i}${j}`);
            oppRow.appendChild(oppCell);

            oppCell.addEventListener('click', () => {
                const coord = oppCell.id.slice(-2);
                const shot = p1.attack(p2, coord[0], coord[1]);
                if (processShot(shot, p2, document.getElementById(`${p2.name}:${coord[0]}${coord[1]}`))) return;
                const enemyShot = p2.compAttack(p1);
                if (processShot(enemyShot.shot, p1, document.getElementById(`${p1.name}:${enemyShot.x}${enemyShot.y}`))) return;
            }, { once: true });
        }
    }
}
module.exports = { renderBoards };
