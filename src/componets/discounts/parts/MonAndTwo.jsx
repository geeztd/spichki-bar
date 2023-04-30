import React from "react";
import { motion } from "framer-motion";

import styles from "../discounts.module.scss";

const MonAndTwo = () => {
  return (
    <section className={styles.mon_and_two}>
      <div className={styles.other}>
        <div className={styles.img}>
          <img src="image/monAndTwo.jpg" alt="image" />
        </div>
        <div className={styles.name_days}>
          <motion.div
            className={styles.mon}
            initial={{ x: -300, right: 0, margin: 0 }}
            whileInView={{ x: 0, right: `45.3%` }}
          >
            Понедельник
          </motion.div>
          <motion.div
            className={styles.and}
            initial={{ x: 300, left: 0 }}
            whileInView={{ x: 0, left: `54%` }}
          >
            &
          </motion.div>
          <motion.div
            className={styles.two}
            initial={{ x: 300, left: 0 }}
            whileInView={{ x: 0, left: `58%` }}
            transition={{ delay: 0.01 }}
          >
            Вторник
          </motion.div>
        </div>
        <div className={styles.seils}>-20%</div>
      </div>
      <div className={styles.name}>На все меню</div>
      <img src="image/line.svg" alt="" />
    </section>
  );
};

export default MonAndTwo;
