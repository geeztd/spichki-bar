import React from "react";
import snacks from "./data/snaks.json";
import hotdogs from "./data/hotdogs.json";
import burgers from "./data/burger.json";

import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
    <section className={styles.main_menu}>
      <h1 className={styles.head}>Остальное меню</h1>
      <div className={styles.body}>
        <div className={styles.hotdog}>
          {hotdogs.map((item) => (
            <div className={styles.item} key={item.name}>
              <h1>{item.name}</h1>
              <div>
                <span className={styles.components}>
                  {item.components}{" "}
                  <span className={styles.mass}>{item.mass}</span>
                </span>
                <p>{item.cost}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.burger}>
          {burgers.map((item) => (
            <div className={styles.item} key={item.name}>
              <h1>{item.name}</h1>
              <div>
                <span className={styles.components}>
                  {item.components}{" "}
                  <span className={styles.mass}>{item.mass}</span>
                </span>
                <p>{item.cost}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.snacks}>
          {snacks.map((item) => (
            <div className={styles.item} key={item.name}>
              <h1>{item.name}</h1>
              <div>
                <span className={styles.components}>
                  {item.components}{" "}
                  <span className={styles.mass}>{item.mass}</span>
                </span>

                <p>{item.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default MainMenu;
