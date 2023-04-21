import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import ContTwo from "../barHero/parts/ContTwo";
import Coctails from "./parts/Coctails";
import SpritzCoctals from "./parts/SpritzCoctals";
import Aperetifs from "./parts/Aperetifs";
import DraftBeer from "./parts/DraftBeer";

import styles from "./barMain.module.scss";

const BarMain = () => {
  const isAboveSmallQuery = useMediaQuery(`(min-width:768px)`);
  return (
    <section>
      {isAboveSmallQuery ? (
        <div className={styles.bar_main}>
          <Coctails />
          <div className={styles.rig}>
            <SpritzCoctals />
            <Aperetifs />
            <DraftBeer />
          </div>
        </div>
      ) : (
        <>
          <div className={styles.bar_main}>
            <Coctails />
            <div className={styles.right}>
              <ContTwo />
              <SpritzCoctals />
            </div>
          </div>
          <div className={styles.bar_main}>
            <Aperetifs />
            <DraftBeer />
          </div>
        </>
      )}
    </section>
  );
};

export default BarMain;
