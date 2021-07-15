import React from 'react';
import styles from './ResultSection.module.scss';
import utils from '../../helpers/utils';
import HistorySection from '../HistorySection';

const ResultsSection = ({
  result,
  gameHistory,
  playAgain,
  closeModal,
  goHome,
}) => {
  const message = utils.getResultMessage(result);

  const handleNewGame = () => {
    playAgain();
    closeModal();
  };
  return (
    <div className={styles.result__container}>
      <p className={styles.message}>{message}</p>
      <HistorySection history={gameHistory} />
      <div className={styles.button__container}>
        <button onClick={handleNewGame}>Play again</button>
      </div>
    </div>
  );
};

export default ResultsSection;
