import React from "react";
import styles from "./broke.module.scss";
const Broke = () => {
  return (
    <section className={styles.broke}>
      <div className={styles.head}>
        <img className={styles.bg} src="image/broke.png" alt="bg"></img>
        <img className={styles.logo} src="image/logo.svg" alt="logo" />
        <h1>Бронь</h1>
      </div>
      <form action="broke">
        <div className={styles.top_inputs}>
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Телефон" />
        </div>
        <div className={styles.bottom_inputs}>
          <input type="text" placeholder="Кол-во людей" />
          <input type="text" placeholder="Дата" />
          <input type="text" placeholder="Время" />
        </div>
        <div className={styles.button}>Забронировать</div>
      </form>
    </section>
  );
};

export default Broke;
