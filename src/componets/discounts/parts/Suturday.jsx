import React from "react";
import { motion } from "framer-motion";
import styles from "../discounts.module.scss";

const Suturday = () => {
  return (
    <section className={styles.sut}>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className={styles.left}
      >
        Воскресенье
      </motion.div>
      <div className={styles.seil}>5 + 5</div>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        className={styles.right}
      >
        на настойки
      </motion.div>
    </section>
  );
};

export default Suturday;
