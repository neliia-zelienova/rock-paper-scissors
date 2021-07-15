import { createSelector } from '@reduxjs/toolkit';

const getHistory = state => state.game.history;

const getGameData = state => state.game.game;

const getStatistics = createSelector([getHistory], history => {
  let wins = 0;
  let draws = 0;
  let lost = 0;
  history.forEach(item => {
    switch (Number(item.result)) {
      case 0:
        ++lost;
        break;
      case 1:
        ++draws;
        break;
      case 2:
        ++wins;
        break;
      default:
        break;
    }
  });
  if (wins > 0) wins = (wins / history.length) * 100;
  if (draws > 0) draws = (draws / history.length) * 100;
  if (lost > 0) lost = (lost / history.length) * 100;
  return { wins, draws, lost };
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { getGameData, getHistory, getStatistics };
