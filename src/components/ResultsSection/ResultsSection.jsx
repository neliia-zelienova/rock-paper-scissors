import React from "react";
import { useSelector } from "react-redux";
import styles from "./ResultSection.module.css";

import { gameSelectors } from "../../redux/game";

const ResultsSection = () => {
  const result = useSelector((state) => gameSelectors.getResult(state));
  console.log("ResultsSection result", result);

  const getAnEmoji = (result) => {
    switch (result) {
      case 0:
        return <p>&#x1F629;</p>;
      case 1:
        return <p>&#x1F928;</p>;
      case 2:
        return <p>&#x1F973;</p>;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      {result < 0 ? (
        <p className={styles.initial__text}>
          Here is a result section. Let's play!
        </p>
      ) : (
        getAnEmoji(result)
      )}
    </div>
  );
};

export default ResultsSection;
