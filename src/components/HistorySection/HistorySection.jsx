import React from 'react';
import HistoryItem from './HistoryItem';
import styles from './HistorySection.module.scss';

const HistorySection = ({ history }) => {
  return (
    <div className={styles.container}>
      <table className={styles.history__table}>
        <thead>
          <tr className={styles.table__row}>
            <th className={styles.table__column__date}>Round</th>
            <th className={styles.table__column}>You</th>
            <th className={styles.table__column}>Browser</th>
            <th className={styles.table__column}>Result</th>
          </tr>
        </thead>
        <tbody>
          {history.map(item => (
            <HistoryItem
              key={item.id}
              round={item.round}
              userMove={item.userMove}
              opponentMove={item.opponentMove}
              result={item.roundResult}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorySection;
