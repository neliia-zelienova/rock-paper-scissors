import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { gameOperations } from "../../redux/game";

const PlaySection = () => {
  const [move, setMove] = useState(-1);

  const handleClick = (e) => {
    console.log("setMove", e.target.dataset.value);
    setMove(Number(e.target.dataset.value));
    console.log("sendMove", move);
    sendMove(Number(e.target.dataset.value));
  };

  const dispatch = useDispatch();
  const sendMove = useCallback(
    (move) => dispatch(gameOperations.playGame(move)),
    [dispatch]
  );

  return (
    <div>
      <p>
        Choose Rock Paper or Scissors. Browser will make its choise
        simultaneously.
      </p>
      <ul>
        <li data-value="0" onClick={handleClick}>
          Rock
        </li>
        <li data-value="1" onClick={handleClick}>
          Paper
        </li>
        <li data-value="2" onClick={handleClick}>
          Scissors
        </li>
      </ul>
    </div>
  );
};

export default PlaySection;
