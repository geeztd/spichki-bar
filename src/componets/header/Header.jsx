import React, { useState } from "react";
import { motion } from "framer-motion";
import { headerData } from "./headerData";
import {
  burgAnimateTop,
  menuAnimate,
  burgAnimateMidle,
  burgAnimateButtom,
  burgAnimate,
} from "./animate";
import styles from "./header.module.scss";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <img src="image/logo.svg" alt="logo" />
        </li>
        {headerData.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{
              scale: 1.1,
            }}
          >
            <a href={item.link}>{item.name}</a>
          </motion.li>
        ))}
      </ul>
      <div className={styles.mobile_header}>
        <img src="image/logo.svg" alt="logo" />
        <motion.div
          initial="hidden"
          animate={burger ? "open" : "close"}
          variants={burgAnimate}
          className={styles.burger}
          onClick={(e) => {
            !burger
              ? (document.body.style.overflow = `hidden`)
              : (document.body.style.overflow = `visible`);

            setBurger(!burger);
          }}
        >
          <motion.span
            initial="hidden"
            animate={burger ? "open" : "close"}
            variants={burgAnimateTop}
            className={styles.one}
          ></motion.span>
          <motion.span
            initial="hidden"
            animate={burger ? "open" : "close"}
            variants={burgAnimateMidle}
            className={styles.two}
          ></motion.span>
          <motion.span
            initial="hidden"
            animate={burger ? "open" : "close"}
            variants={burgAnimateButtom}
            className={styles.three}
          ></motion.span>
        </motion.div>
      </div>
      <motion.ul
        initial="hidden"
        animate={burger ? "open" : "close"}
        variants={menuAnimate}
        className={`${styles.mobile_nav} ${
          burger ? styles.active : styles.hid
        }`}
      >
        {headerData.map((item, i) => (
          <motion.li
            key={item.name}
            initial={{ x: 1000 }}
            whileInView={{ x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <a href={item.link}>{item.name}</a>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
