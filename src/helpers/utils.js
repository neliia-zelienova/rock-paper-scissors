import rock from '../images/game/purple_rock.png';
import paper from '../images/game/sheet_of_paper.png';
import scissors from '../images/game/scissors.png';
import star from '../images/game/star_filld.svg';
import emptyStar from '../images/game/empty_star.svg';

const getImageByMove = move => {
  switch (move) {
    case 0:
      return rock;
    case 1:
      return paper;
    case 2:
      return scissors;
    default:
      return;
  }
};
const getResultMessage = result => {
  switch (result) {
    case 0:
      return 'You Lose...';
    case 1:
      return 'Tie';
    case 2:
      return 'You Win!';
    default:
      return;
  }
};

const createScore = score => {
  const result = [];
  if (score > 0)
    for (let i = 0; i < score; i++) {
      result.push(star);
    }
  while (result.length < 3) {
    result.push(emptyStar);
  }
  return result;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getImageByMove, getResultMessage, createScore };
