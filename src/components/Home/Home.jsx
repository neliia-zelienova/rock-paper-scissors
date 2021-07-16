import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import rock from './../../images/game/purple_rock.png';
import paper from './../../images/game/sheet_of_paper.png';
import scissors from './../../images/game/scissors.png';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={rock} alt="" />
        <img src={paper} alt="" />
        <img src={scissors} alt="" />
      </div>
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

export default Home;
