import React from "react";
import data from "../data/tinturesData.json";
import styles from "../barHero.module.scss";

const Tintures = () => {
  return (
    <div className={styles.tinctures}>
      <div className={styles.headtin}>
        <h1>{data.h}</h1>
      </div>
      <div className={styles.tincture}>
        <div className={styles.cost}>{data.volume}</div>
        {data.items.map((item, i) => (
          <div key={i} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tintures;
