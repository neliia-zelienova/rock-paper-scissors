import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './random-game-actions';

const {
  nextRound,
  userСhoice,
  opponentСhoice,
  setRoundResult,
  setGameResult,
  resetHistory,
  updateHistory,
  endGame,
} = actions;

const initialGameState = {
  round: 1,
  userMove: -1,
  userScore: 0,
  opponentMove: -1,
  opponentScore: 0,
  roundResult: -1,
  gameResult: -1,
};

const game = createReducer(initialGameState, {
  [nextRound]: state => {
    const { round } = state;
    console.log('round', round);
    return {
      ...state,
      round: round + 1,
      roundResult: -1,
      userMove: -1,
      opponentMove: -1,
    };
  },
  [opponentСhoice]: (state, { payload }) => {
    return { ...state, opponentMove: payload };
  },
  [userСhoice]: (state, { payload }) => {
    return { ...state, userMove: payload };
  },
  [setRoundResult]: (state, { payload }) => {
    let { userScore, opponentScore } = state;
    console.log(
      '{ userScore, opponentScore, gameResult } = state;',
      userScore,
      opponentScore,
    );
    switch (payload) {
      case 0:
        opponentScore += 1;
        break;
      case 1:
        break;
      case 2:
        userScore += 1;
        break;
      default:
        break;
    }
    return {
      ...state,
      roundResult: payload,
      opponentScore,
      userScore,
    };
  },
  [setGameResult]: (state, { payload }) => {
    return { ...state, gameResult: payload };
  },
  [endGame]: () => initialGameState,
});

const history = createReducer([], {
  [updateHistory]: (state, { payload }) => [...state, payload],
  [resetHistory]: () => [],
});

export default combineReducers({
  game,
  history,
});

// const round = createReducer(1, {
//   [nextRound]: state => state + 1,
//   [endGame]: () => 1,
// });

// const userMove = createReducer(-1, {
//   [opponentСhoice]: (_, { payload }) => payload,
// });

// const opponentMove = createReducer(-1, {
//   [userСhoiceSuccess]: (_, { payload }) => payload,
// });

// const userScore = createReducer(0, {
//   [updateUserScore]: state => state + 1,
//   [endGame]: () => 0,
// });

// const opponentScore = createReducer(0, {
//   [updateOpponentScore]: state => state + 1,
//   [endGame]: () => 0,
// });

// const roundResult = createReducer('', {
//   [setRoundResult]: (_, { payload }) => payload,
//   [endGame]: () => '',
// });
