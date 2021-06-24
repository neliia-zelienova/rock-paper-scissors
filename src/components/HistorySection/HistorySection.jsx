import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { gameOperations, gameSelectors } from "../../redux/game";

const HistorySection = () => {
  const dispatch = useDispatch();
  const clear = useCallback(
    () => dispatch(gameOperations.clearHistory()),
    [dispatch]
  );

  const { wins, draws, lost } = useSelector((state) =>
    gameSelectors.getStatistics(state)
  );

  return (
    <div>
      <p>This is a HistorySection</p>
      <ul>
        <li>Wins {wins}</li>
        <li>Draws {draws}</li>
        <li>Lost {lost}</li>
      </ul>
      <button onClick={clear}>Clear history</button>
    </div>
  );
};

export default HistorySection;
