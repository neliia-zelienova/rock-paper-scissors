import actions from "./game-actions";

const { userСhoice, updateHistory, resetHistory } = actions;

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

const playGame = (userMove) => async (dispatch) => {
  const browserMove = chooseMove();
  const result = defineGameResult(userMove, browserMove);
  dispatch(userСhoice(result));
  dispatch(updateHistory({ userMove, browserMove, result }));
};

const clearHistory = () => async (dispatch) => {
  dispatch(resetHistory());
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  playGame,
  clearHistory,
};
