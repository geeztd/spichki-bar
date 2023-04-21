import React from "react";
import styles from "../MainMenu.module.scss";

const OtherMenu = () => {
  return (
    <div className={styles.other}>
      <p>
        <span>Соусы в ассортименте</span>{" "}
        <span className={styles.gram}>30мл/2р</span>
      </p>
      <p>
        <span>Суп дня</span> <span className={styles.gram}>300гр/7р</span>
      </p>
      <p>
        <span>Десерт дня</span> <span className={styles.gram}>160гр/7р</span>
      </p>
    </div>
  );
};

export default OtherMenu;
