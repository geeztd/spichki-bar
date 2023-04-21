import React from "react";
import data from "../data/coctailsData.json";
import styles from "../barMain.module.scss";

const Coctails = () => {
  return (
    <div className={styles.coctails}>
      <div className={styles.box}>
        <h2>Коктейли</h2>
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

export default Coctails;
