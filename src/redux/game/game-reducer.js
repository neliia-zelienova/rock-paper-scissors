import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./game-actions";

const { userСhoice, updateHistory, resetHistory } = actions;

const gameResult = createReducer(-1, {
  [userСhoice]: (_, { payload }) => {
    console.log("reducer gameResult userСhoice", payload);
    return payload;
  },
  [resetHistory]: () => -1,
});

const history = createReducer([], {
  [updateHistory]: (state, { payload }) => [...state, payload],
  [resetHistory]: () => [],
});

export default combineReducers({ history, gameResult });
