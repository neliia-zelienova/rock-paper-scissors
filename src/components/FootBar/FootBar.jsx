import React from "react";

import styles from "./FootBar.module.css";

const Footbar = () => {
  return (
    <div className={styles.container}>
      <a
        title="LinkedIn"
        target="blank"
        href="https://www.linkedin.com/in/neliia-zelienova/"
        className={[styles.link, styles.linkedin].join(" ")}
      ></a>
      <a
        title="GitHub"
        target="blank"
        href="https://github.com/neliia-zelienova"
        className={[styles.link, styles.github].join(" ")}
      ></a>
    </div>
  );
};

export default Footbar;
