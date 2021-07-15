import { createAction } from '@reduxjs/toolkit';

const nextRound = createAction('random-game/startNextRound');
const userСhoice = createAction('random-game/userMove');
const opponentСhoice = createAction('random-game/opponentMove');

const setRoundResult = createAction('random-game/defineRoundResult');
const setGameResult = createAction('random-game/defineGameResult');

const resetHistory = createAction('random-game/reset');
const updateHistory = createAction('random-game/updateHistory');

const gameTimeout = createAction('random-game/gameTimeout');

const endGame = createAction('random-game/endGame');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nextRound,
  userСhoice,
  opponentСhoice,
  setRoundResult,
  setGameResult,
  resetHistory,
  updateHistory,
  gameTimeout,
  endGame,
};
