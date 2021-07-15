import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GameSection from '../components/GameSection';
import Container from '../components/Container';

import { gameOperations, gameSelectors } from '../redux/random-game';

const RandomView = () => {
  const dispatch = useDispatch();

  const sendMove = useCallback(
    move => dispatch(gameOperations.playGame(move)),
    [dispatch],
  );

  const game = useSelector(gameSelectors.getGameData);
  const history = useSelector(gameSelectors.getHistory);

  const startOver = () => dispatch(gameOperations.clearGame());
  return (
    <Container>
      <GameSection
        round={game.round}
        sendMove={sendMove}
        userMove={game.userMove}
        opponentMove={game.opponentMove}
        playerScore={game.userScore}
        opponentScore={game.opponentScore}
        roundResult={game.roundResult}
        gameResult={game.gameResult}
        gameHistory={history}
        endGame={startOver}
      />
    </Container>
  );
};

export default RandomView;
