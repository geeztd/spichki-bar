import React from "react";
import data from "../data/contOneData.json";

import styles from "../barHero.module.scss";

const ContOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>
          <p>{data[0].h}</p>
          <p>{data[0].volume}</p>
        </h2>
        <div>
          {data[0].items.map((item) => (
            <div key={item.name} className={styles.item}>
              <div>{item.name}</div>
              <div>{item.cost}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.box}>
        <h2>
          <p>{data[1].h}</p>
          <p>{data[1].volume}</p>
        </h2>
        <div className={styles.item}>
          <div>{data[1].name}</div>
          <div>{data[1].cost}</div>
        </div>
      </div>
      <div className={styles.box}>
        <h2>
          <p>{data[2].h}</p>
          <p>{data[2].volume}</p>
        </h2>
        <div>
          {data[2].items.map((item) => (
            <div key={item.name} className={styles.item}>
              <div>{item.name}</div>
              <div>{item.cost}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.box}>
        <h2>
          <p>{data[3].h}</p>
          <p>{data[3].volume}</p>
        </h2>
        <div className={styles.item}>
          <div>{data[3].name}</div>
          <div>{data[3].cost}</div>
        </div>
      </div>
      <div className={styles.box}>
        <h2>
          <p>{data[4].h}</p>
          <p>{data[4].volume}</p>
        </h2>
        <div>
          {data[4].items.map((item) => (
            <div key={item.name} className={styles.item}>
              <div>{item.name}</div>
              <div>{item.cost}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContOne;
