import React from "react";
import data from "../data/contTwoData.json";
import styles1 from "../barHero.module.scss";
import styles2 from "../../barMain/barMain.module.scss";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const ContTwo = () => {
  const isAboveSmallQuery = useMediaQuery(`(min-width:768px)`);
  const styles = isAboveSmallQuery ? styles1 : styles2;
  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <div key={i} className={styles.box}>
          <h2>
            <p>{item.h}</p>
            <p>{item.volume}</p>
          </h2>
          <div>
            {item.items.map((item) => (
              <div key={item.name} className={styles.item}>
                <div>{item.name}</div>
                <div>{item.cost}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContTwo;
