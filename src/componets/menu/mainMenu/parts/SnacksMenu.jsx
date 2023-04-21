import React from "react";
import data from "../data/snaks.json";
import styles from "../MainMenu.module.scss";

const SnacksMenu = () => {
  return (
    <div className={`${styles.part} ${styles.snack}`}>
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

export default SnacksMenu;
