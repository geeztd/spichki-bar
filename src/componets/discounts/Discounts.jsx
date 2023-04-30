import React from "react";
import { motion } from "framer-motion";
import MonAndTwo from "./parts/MonAndTwo";
import WenAndTheth from "./parts/WenAndTheth";
import FriAndSun from "./parts/FriAndSun";
import Suturday from "./parts/Suturday";
import styles from "./discounts.module.scss";

const Discounts = () => {
  return (
    <>
      <div className={styles.head}>
        <motion.h1 initial={{ right: 300 }} whileInView={{ right: 0 }}>
          АКЦИИ НА КАЖДЫЙ ДЕНЬ
        </motion.h1>
      </div>
      <MonAndTwo />
      <WenAndTheth />
      <FriAndSun />
      <Suturday />
    </>
  );
};

export default Discounts;
