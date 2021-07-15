import React from 'react';
import styles from './HistorySection.module.scss';
import utils from '../../helpers/utils';

const HistoryItem = ({ round, userMove, opponentMove, result }) => {
  const userImg = utils.getImageByMove(userMove);
  const opponentImg = utils.getImageByMove(opponentMove);
  const gameResult = utils.getResultMessage(result);

  return (
    <tr className={styles.table__row}>
      <td className={styles.column__round}>{round}</td>
      <td className={styles.column__image}>
        <img src={userImg} alt="" />
      </td>
      <td className={styles.column__image}>
        <img src={opponentImg} alt="" />
      </td>
      <td className={styles.column__result}>{gameResult}</td>
    </tr>
  );
};

export default HistoryItem;
