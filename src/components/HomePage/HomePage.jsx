import React from 'react';
import styles from './HomePage.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.gameName}>Rock Paper Scissors</h1>
      <div className={styles.buttonContainer}>
        <Link className={styles.friend__btn} to={'/'}>
          {/* to={routes.room} */}
          Play with a friend
        </Link>
        <Link className={styles.random__btn} to={routes.random}>
          Fight with a machine
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
