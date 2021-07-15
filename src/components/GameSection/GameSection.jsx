import { useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react';
import GameItem from '../GameItem';
import game from '../../helpers/game';

import { loaderSelectors } from '../../redux/loader';
import Loader from 'react-loader-spinner';

import styles from './GameSection.module.scss';

import ResultsSection from '../ResultsSection';

import Modal from '../Modal';

import utils from '../../helpers/utils';

const GameSection = ({
  round,
  userMove,
  opponentMove,
  playerScore,
  opponentScore,
  roundResult,
  gameResult,
  gameHistory,
  sendMove,
  endGame,
}) => {
  const handleClick = e => {
    sendMove(Number(e.target.dataset.value));
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    gameResult >= 0 && toggleModal();
  }, [gameResult, toggleModal]);

  const userMoveImg = utils.getImageByMove(userMove);
  const oppponentMoveImg = utils.getImageByMove(opponentMove);

  const loader = useSelector(loaderSelectors.getLoader);

  const player = utils.createScore(Number(playerScore));
  const opponent = utils.createScore(Number(opponentScore));

  const message = utils.getResultMessage(roundResult);

  return (
    <div className={styles.container}>
      <h2 className={styles.round__header}>Round {round}</h2>
      <div className={styles.battlefield}>
        <div className={styles.player}>
          <h3>You</h3>

          <div className={styles.score__container}>
            {player.map(item => (
              <div>
                <img src={item} alt="" className={styles.score} />
              </div>
            ))}
          </div>

          {userMove < 0 ? (
            <>
              <p className={styles.make__moove}>Make your moove</p>
              <ul className={styles.choose__container}>
                {game.map(item => (
                  <GameItem
                    key={item.id}
                    img={item.img}
                    alt={item.alt}
                    action={handleClick}
                    dataValue={item.value}
                  />
                ))}
              </ul>
            </>
          ) : (
            <div className={styles.move__container}>
              <img src={userMoveImg} alt="" />
            </div>
          )}
        </div>
        <div className={styles.opponent}>
          <h3>Browser</h3>
          <div className={styles.score__container}>
            {opponent.map(item => (
              <div>
                <img src={item} alt="" className={styles.score} />
              </div>
            ))}
          </div>
          {opponentMove >= 0 ? (
            <div className={styles.move__container}>
              <img src={oppponentMoveImg} alt="" />
            </div>
          ) : (
            loader && (
              <div className={styles.loader__container}>
                <Loader
                  type="Circles"
                  color="rgba(0,0,0, 0.7)"
                  height={100}
                  width={100}
                  timeout={1500}
                />
              </div>
            )
          )}
        </div>
      </div>
      <p className={styles.message}>{message}</p>
      {gameResult >= 0 && (
        <div className={styles.button__wrapper}>
          <button onClick={toggleModal}>Show Results</button>
        </div>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <ResultsSection
            result={gameResult}
            gameHistory={gameHistory}
            playAgain={endGame}
            closeModal={toggleModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default GameSection;
