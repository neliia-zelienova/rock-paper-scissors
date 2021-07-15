import React from 'react';

import styles from './FootBar.module.scss';
import Container from '../Container';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const Footbar = () => {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.home__link}>
          <Link to={routes.home}>Home</Link>
        </div>
        <div className={styles.social__networks}>
          <a
            href="https://www.linkedin.com/in/neliia-zelienova/"
            title="LinkedIn"
            target="blank"
            className={styles.linkedin}
          >
            {' '}
          </a>
          <a
            title="GitHub"
            target="blank"
            href="https://github.com/neliia-zelienova"
            className={styles.github}
          >
            {' '}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footbar;
