import React from "react";
import { useSelector } from "react-redux";
import styles from "./ResultSection.module.css";
import img from "../AppBar/images/rock_paper_scissors_playing_rope.png";

import { gameSelectors } from "../../redux/game";

import { getAnEmoji } from "../services/utils";

const ResultsSection = () => {
  const result = useSelector((state) => gameSelectors.getResult(state));
  const emoji = getAnEmoji(result);
  console.log("emoji", emoji);
  return (
    <div className={styles.container}>
      <div
        className={
          result < 0
            ? [styles.emoji__container, styles.emoji__hidden].join(" ")
            : styles.emoji__container
        }
      >
        {emoji}
      </div>
      <div>
        <p
          className={
            result < 0
              ? styles.initial__text
              : [styles.initial__text, styles.dibable].join(" ")
          }
        >
          Play to see a result
        </p>
        <img src={img} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default ResultsSection;
