import React from "react";
import data from "../data/hotdogs.json";

import styles from "../MainMenu.module.scss";

const HotDogMenu = () => {
  return (
    <div className={`${styles.part} ${styles.hotdog}`}>
      {data.map((item) => (
        <div className={styles.item} key={item.name}>
          <h1>{item.name}</h1>
          <div>
            <span className={styles.components}>
              {item.components} <span className={styles.mass}>{item.mass}</span>
            </span>
            <p>{item.cost}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotDogMenu;
