import React from "react";
import BurgerMenu from "./parts/BurgerMenu";
import SnacksMenu from "./parts/SnacksMenu";
import HotDogMenu from "./parts/HotDogMenu";
import KesMenu from "./parts/KesMenu";
import OtherMenu from "./parts/OtherMenu";
import useMediaQuery from "../../../hooks/useMediaQuery";

import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  const isAboveMediumQuery = useMediaQuery(`(min-width:882px)`);

  return (
    <section className={styles.main_menu}>
      {isAboveMediumQuery ? (
        <>
          <h1 className={styles.head}>Остальное меню</h1>
          <div className={styles.body}>
            <div className={styles.box}>
              <HotDogMenu />
              <KesMenu />
              <OtherMenu />
            </div>
            <div className={styles.box}>
              <BurgerMenu />
              <SnacksMenu />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className={styles.head}>Остальное меню</h1>
          <div className={styles.body}>
            <div className={styles.box}>
              <HotDogMenu />
              <BurgerMenu />
            </div>
            <div className={styles.box}>
              <SnacksMenu />
              <KesMenu />
              <OtherMenu />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default MainMenu;
