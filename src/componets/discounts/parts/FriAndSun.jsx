import React from "react";
import { motion } from "framer-motion";
import styles from "../discounts.module.scss";
const FriAndSun = () => {
  return (
    <section className={styles.fri_sun}>
      <div className={styles.names}>
        <motion.div
          initial={{ x: -150 }}
          whileInView={{ x: 0 }}
          className={styles.fri}
        >
          Пятница
        </motion.div>
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          className={styles.and}
        >
          &
        </motion.div>
        <motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.sun}
        >
          Суббота
        </motion.div>
      </div>
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        className={styles.other}
      >
        <p className={styles.seil}>4 + 1</p>
        <p className={styles.nast}>на настойки</p>
      </motion.div>
      <img src="image/line3.svg" alt="line3" />
    </section>
  );
};

export default FriAndSun;
