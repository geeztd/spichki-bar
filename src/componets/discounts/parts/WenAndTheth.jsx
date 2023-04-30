import React from "react";
import { motion } from "framer-motion";
import styles from "../discounts.module.scss";
const WenAndTheth = () => {
  return (
    <section className={styles.wen_thert}>
      <div className={styles.names}>
        <div className={styles.wen}>
          <motion.h2 initial={{ x: -100 }} whileInView={{ x: 0 }}>
            Среда
          </motion.h2>
          <motion.p
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.01 }}
          >
            На настойки
          </motion.p>
        </div>
        <div className={styles.thert}>
          <motion.h2 initial={{ x: 100 }} whileInView={{ x: 0 }}>
            Четверг
          </motion.h2>
          <motion.p
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.01 }}
          >
            На коктейли
          </motion.p>
        </div>
      </div>
      <div className={styles.seil}>
        <img className={styles.left} src="image/nast.jpg" alt="nast" />
        <h1>1 + 1</h1>
        <img className={styles.right} src="image/kok.webp" alt="kok" />
      </div>
      <img src="image/line2.svg" alt="line2" />
    </section>
  );
};

export default WenAndTheth;
