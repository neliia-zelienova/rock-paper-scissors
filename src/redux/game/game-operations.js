import actions from "./game-actions";
import { v4 as uuidv4 } from "uuid";

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
  const date = Date.now();
  const id = uuidv4();
  dispatch(updateHistory({ id, date, userMove, browserMove, result }));
};

const clearHistory = () => async (dispatch) => {
  dispatch(resetHistory());
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  playGame,
  clearHistory,
};
