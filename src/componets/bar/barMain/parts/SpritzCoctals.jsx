import React from "react";
import data from "../data/spritzData.json";
import styles from "../barMain.module.scss";

const SpritzCoctals = () => {
  return (
    <div className={styles.spritz_coctails}>
      <div className={styles.box}>
        <h2>Щприц Коктейли</h2>
        <div>
          {data.map((item) => (
            <div key={item.name} className={styles.item}>
              <div className={styles.head}>
                <div>{item.name}</div>
                <div>{item.cost}</div>
              </div>
              <div className={styles.struct}>{item.struct}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpritzCoctals;
