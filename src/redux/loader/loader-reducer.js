import { createReducer } from '@reduxjs/toolkit';
import { gameActions } from '../random-game';

const {
  nextRound,
  userСhoice,
  opponentСhoice,
  setRoundResult,
  setGameResult,
  resetHistory,
  updateHistory,
  gameTimeout,
} = gameActions;

const loader = createReducer(false, {
  [nextRound]: () => false,
  [userСhoice]: () => false,
  [opponentСhoice]: () => false,
  [setRoundResult]: () => false,
  [setGameResult]: () => false,
  [resetHistory]: () => false,
  [updateHistory]: () => false,
  [gameTimeout]: () => true,
});

export default loader;
