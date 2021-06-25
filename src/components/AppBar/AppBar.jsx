import React from "react";
import logo from "./images/logo.png";
import playingLogo from "./images/rock_paper_scissors_playing_rope.png";
import sittingLogo from "./images/rock_paper_scissors_sitting.png";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />
    </div>
  );
};

export default AppBar;
