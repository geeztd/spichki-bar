import React from "react";
import styles from "./newMenu.module.scss";

const NewMenu = () => {
  return (
    <section className={styles.new_menu}>
      <img className={styles.bg} src="image/menu.webp" alt="menubg" />
      <h1>Новинки меню</h1>
      <div className={styles.positions}>
        <div className={styles.position}>
          <img src="image/hotdog.jpg" alt="hotdog" />
          <h3>Хот-дог с коул слоу</h3>
        </div>
        <div className={styles.position}>
          <img src="image/burg.jpg" alt="burger" />
          <h3>Вишневый бургер</h3>
        </div>
      </div>
    </section>
  );
};

export default NewMenu;
