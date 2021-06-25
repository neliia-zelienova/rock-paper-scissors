import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { gameOperations } from "../../redux/game";

import styles from "./PlaySection.module.css";

const PlaySection = () => {
  const handleClick = (e) => {
    sendMove(Number(e.target.dataset.value));
  };

  const dispatch = useDispatch();
  const sendMove = useCallback(
    (move) => dispatch(gameOperations.playGame(move)),
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <p className={styles.rules}>
        Choose Rock Paper or Scissors. Browser will make its choise
        simultaneously.
      </p>
      <ul className={styles.choose__container}>
        <li className={styles.move__container}>
          <button
            data-value="0"
            onClick={handleClick}
            className={[styles.move__button, styles.rock__move].join(" ")}
          ></button>
        </li>
        <li className={styles.move__container}>
          <button
            data-value="1"
            onClick={handleClick}
            className={[styles.move__button, styles.paper__move].join(" ")}
          ></button>
        </li>
        <li className={styles.move__container}>
          <button
            data-value="2"
            onClick={handleClick}
            className={[styles.move__button, styles.scissors__move].join(" ")}
          ></button>
        </li>
      </ul>
    </div>
  );
};

export default PlaySection;
