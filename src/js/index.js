import '../scss/style.scss';
import { p1, p2 } from "./scripts/game";
import renderBoards from './dom/render-board';
import dragDrop from './dom/drag-drop'

p2.board.randomFleet();
renderBoards(p1, p2);
