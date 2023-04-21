import React from "react";
import styles from "../barMain.module.scss";

const Aperetifs = () => {
  return (
    <div className={styles.aperetifs}>
      <h2>Аперетивы</h2>
      <div className={styles.item}>
        <div className={styles.head}>
          <div>Lillet blanc</div>
          <div>75мл/7.50</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.head}>
          <div>Martini Fiero</div>
          <div>50мл/7.00</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.head}>
          <div>Martini Bianco/ Rosso/Extra Dry</div>
          <div>50мл/7.00</div>
        </div>
      </div>
    </div>
  );
};

export default Aperetifs;
