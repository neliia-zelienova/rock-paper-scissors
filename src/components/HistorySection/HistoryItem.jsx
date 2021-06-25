import React from "react";
import styles from "./HistorySection.module.css";
import rock from "../images/purple_rock.png";
import scissors from "../images/scissors.png";
import paper from "../images/sheet_of_paper.png";
import { getAnEmoji } from "../services/utils";

const getMoveImg = (move) => {
  switch (move) {
    case 0:
      return rock;
    case 1:
      return paper;
    case 2:
      return scissors;
    default:
      break;
  }
};

const HistoryItem = ({ date, userMove, browserMove, result }) => {
  const userImg = getMoveImg(userMove);
  const browserImg = getMoveImg(browserMove);
  const gameResult = getAnEmoji(result);

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const dateObj = new Date(date);
  const gameDate = dateObj.toLocaleDateString("en-US", options);
  console.log(gameDate);
  return (
    <tr className={styles.table__row}>
      <td className={styles.column__image}>
        <p>{gameDate}</p>
      </td>
      <td className={styles.column__image}>
        <img src={userImg} alt="" />{" "}
      </td>
      <td className={styles.column__image}>
        <img src={browserImg} alt="" />
      </td>
      <td className={styles.column__emoji}>{gameResult}</td>
    </tr>
  );
};

export default HistoryItem;
