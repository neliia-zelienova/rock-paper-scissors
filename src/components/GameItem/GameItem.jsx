import styles from './GameItem.module.scss';

const GameItem = ({ img, alt, action, dataValue }) => {
  const handleClick = e => {
    action(e);
  };
  return (
    <li className={styles.game__item} onClick={handleClick}>
      <img
        src={img}
        alt={alt}
        className={styles.game__img}
        data-value={dataValue}
      ></img>
    </li>
  );
};

export default GameItem;
