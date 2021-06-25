import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "react-google-charts";
import HistoryItem from "./HistoryItem";
import styles from "./HistorySection.module.css";
import img from "../AppBar/images/rock_paper_scissors_sitting.png";

import { gameOperations, gameSelectors } from "../../redux/game";

const LAST_SHOWED_HISTORY_LINES = 5;

const HistorySection = () => {
  const [historyWrites, setHistoryWrites] = useState(false);

  const handleShowAll = () => {
    setHistoryWrites(true);
  };
  const handleHide = () => {
    setHistoryWrites(false);
  };

  const dispatch = useDispatch();
  const clear = useCallback(
    () => dispatch(gameOperations.clearHistory()),
    [dispatch]
  );

  const { wins, draws, lost } = useSelector((state) =>
    gameSelectors.getStatistics(state)
  );

  const history = useSelector((state) => gameSelectors.getHistory(state));
  const reversedHistory = Array.from(history).reverse();
  const historyToShow = historyWrites
    ? reversedHistory
    : reversedHistory.slice(0, LAST_SHOWED_HISTORY_LINES);
  return (
    <div className={styles.container}>
      {history.length > 0 ? (
        <div className={styles.history__data}>
          <div className={styles.statistics}>
            <Chart
              width={"300px"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Results", "Game Results"],
                ["Win", wins],
                ["Draw", draws],
                ["Lost", lost],
              ]}
              options={{
                legend: "none",
                pieSliceText: "label",
                pieStartAngle: 100,
                pointSize: 10,
              }}
              rootProps={{ "data-id": "2" }}
            />

            <button onClick={clear} className={styles.history__button}>
              Clear history
            </button>
          </div>
          <div className={styles.table__container}>
            <div
              className={
                historyWrites
                  ? [styles.history, styles.history__all].join(" ")
                  : styles.history
              }
            >
              <table className={styles.history__table}>
                <thead>
                  <tr className={styles.table__row}>
                    <th className={styles.table__column__date}>Date</th>
                    <th className={styles.table__column}>User</th>
                    <th className={styles.table__column}>Browser</th>
                    <th className={styles.table__column}>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {reversedHistory.map((item) => (
                    <HistoryItem
                      key={item.id}
                      date={item.date}
                      userMove={item.userMove}
                      browserMove={item.browserMove}
                      result={item.result}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {history.length > LAST_SHOWED_HISTORY_LINES ? (
              historyWrites ? (
                <button onClick={handleHide} className={styles.history__button}>
                  Hide
                </button>
              ) : (
                <button
                  onClick={handleShowAll}
                  className={styles.history__button}
                >
                  Show all
                </button>
              )
            ) : null}
          </div>
        </div>
      ) : (
        <div className={styles.notification}>
          <p>Here you will see games statistic and history </p>
          <img src={img} alt="" />
        </div>
      )}
    </div>
  );
};

export default HistorySection;
