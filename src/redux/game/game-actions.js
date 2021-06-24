import { createAction } from "@reduxjs/toolkit";

const userСhoice = createAction("game/userMove");

const resetHistory = createAction("game/reset");
const updateHistory = createAction("game/update");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  userСhoice,
  resetHistory,
  updateHistory,
};
