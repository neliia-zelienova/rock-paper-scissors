import rock from '../images/game/purple_rock.png';
import paper from '../images/game/sheet_of_paper.png';
import scissors from '../images/game/scissors.png';
import { v4 as uuid4 } from 'uuid';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: uuid4(),
    name: 'rock',
    value: '0',
    img: rock,
    alt: 'Rock image',
  },
  {
    id: uuid4(),
    name: 'paper',
    value: '1',
    img: paper,
    alt: 'Paper image',
  },
  {
    id: uuid4(),
    name: 'scissors',
    value: '2',
    img: scissors,
    alt: 'Scissors image',
  },
];
