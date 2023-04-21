import React from "react";
import Tintures from "./parts/Tintures";
import ContOne from "./parts/ContOne";
import ContTwo from "./parts/ContTwo";
import useMediaQuery from "../../../hooks/useMediaQuery";
import styles from "./barHero.module.scss";

const BarHero = () => {
  const isAboveSmallQuery = useMediaQuery(`(min-width:768px)`);

  return (
    <section>
      {isAboveSmallQuery ? (
        <div className={styles.bar_hero}>
          <Tintures />
          <ContOne />
          <ContTwo />
        </div>
      ) : (
        <div className={styles.bar_hero}>
          <Tintures />
          <ContOne />
        </div>
      )}
    </section>
  );
};

export default BarHero;
