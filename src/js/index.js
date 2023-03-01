import '../scss/style.scss';
import { p1, p2 } from "./scripts/game";
import renderBoards from './dom/render-board';

p1.board.placeShip(5, [3,3], 'horizontal');
p2.board.placeShip(5, [0,0], 'vertical');
renderBoards(p1, p2);
