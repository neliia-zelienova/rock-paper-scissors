import { createSelector } from "@reduxjs/toolkit";

const getHistory = (state) => state.game.history;

const getResult = (state) => state.game.gameResult;

const getStatistics = createSelector([getHistory], (history) => {
  let wins = 0;
  let draws = 0;
  let lost = 0;
  history.forEach((item) => {
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
  if (wins > 0) wins = Math.round((wins / history.length) * 100);
  if (draws > 0) draws = Math.round((draws / history.length) * 100);
  if (lost > 0) lost = Math.round((lost / history.length) * 100);
  return { wins, draws, lost };
});

export default { getResult, getHistory, getStatistics };
