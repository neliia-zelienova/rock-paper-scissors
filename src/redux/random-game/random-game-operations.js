import actions from './random-game-actions';
import { v4 as uuidv4 } from 'uuid';

const {
  nextRound,
  userСhoice,
  opponentСhoice,
  setRoundResult,
  setGameResult,
  resetHistory,
  updateHistory,
  gameTimeout,
  endGame,
} = actions;

const chooseMove = () => {
  const move = Math.floor(Math.random() * 3);
  return move;
};

// 0 - rock
// 1 - paper
// 2 - scissors

const defineGameResult = (userMove, browserMove) => {
  if (userMove === browserMove) return 1;
  switch (userMove) {
    case 0:
      return browserMove === 1 ? 0 : 2;
    case 1:
      return browserMove === 0 ? 2 : 0;
    case 2:
      return browserMove === 0 ? 0 : 2;
    default:
      break;
  }
};

const playGame = userMove => async (dispatch, getState) => {
  dispatch(userСhoice(userMove));
  const opponentMove = chooseMove();
  dispatch(gameTimeout());
  await new Promise(resolve => setTimeout(resolve, 1500));
  dispatch(opponentСhoice(opponentMove));
  const roundResult = defineGameResult(userMove, opponentMove);
  dispatch(setRoundResult(roundResult));
  const id = uuidv4();
  const { userScore, opponentScore, round } = getState().game.game;
  dispatch(updateHistory({ id, round, userMove, opponentMove, roundResult }));
  if (userScore > 2 || opponentScore > 2) {
    const result = userScore > opponentScore ? 2 : 0;
    dispatch(setGameResult(result));
  } else {
    dispatch(gameTimeout());
    await new Promise(resolve => setTimeout(resolve, 2000));
    dispatch(nextRound());
  }
};

const clearGame = () => async dispatch => {
  dispatch(endGame());
  dispatch(resetHistory());
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  playGame,
  clearGame,
};
