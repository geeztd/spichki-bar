import React from "react";
import styles from "./discounts.module.scss";

const Discounts = () => {
  return (
    <>
      <h1 className={styles.head}>АКЦИИ НА КАЖДЫЙ ДЕНЬ</h1>
      <section className={styles.mon_and_two}>
        <div className={styles.mon}>Понедельник</div>
        <div>
          <img src="" alt="" />
          <div className={styles.other}>
            <div className={styles.and}>&</div>
            <div className={styles.two}>Вторник</div>
            <div className={styles.seils}>-20%</div>
          </div>
        </div>
        <div className={styles.name}>На все меню</div>
      </section>
    </>
  );
};

export default Discounts;
