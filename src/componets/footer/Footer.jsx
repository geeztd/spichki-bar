import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";

import styles from "./footer.module.scss";

const Footer = () => {
  const isAboveSmallQuery = useMediaQuery(`(min-width:768px)`);

  return (
    <footer>
      {isAboveSmallQuery ? (
        <>
          <div className={styles.about}>
            <motion.div
              className={styles.address}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
            >
              <h3>Адреса</h3>
              <p>Октябрьская, 19б</p>
              <p>Kомсомольская, 5а</p>
            </motion.div>
            <motion.img
              src="image/logo.svg"
              alt="logo"
              initial={{ y: -100 }}
              whileInView={{ y: 0 }}
            />
            <motion.div
              className={styles.time}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
            >
              <h3>Время работы</h3>
              <p>Каждый день</p>
              <p>С 17:00 до 02:00</p>
            </motion.div>
          </div>
          <div className={styles.soc}>
            <motion.div
              className={styles.inst}
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
            >
              <h4>Instagram</h4>
              <p>@spichki_bar</p>
              <p>@spichki_bar_ok19b</p>
            </motion.div>
            <motion.div
              className={styles.tg}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
            >
              <h4>Telegram</h4>
              <p>@spichki_bar</p>
            </motion.div>
            <motion.div
              className={styles.tt}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
            >
              <h1>TikTok</h1>
              <p>spichki_bar</p>
            </motion.div>
          </div>
        </>
      ) : (
        <>
          <img src="image/logo.svg" alt="logo" />
          <div className={styles.mob}>
            <div className={styles.about}>
              <div className={styles.address}>
                <h3>Адреса</h3>
                <p>Октябрьская, 19б</p>
                <p>Kомсомольская, 5а</p>
              </div>
              <div className={styles.time}>
                <h3>Время работы</h3>
                <p>Каждый день</p>
                <p>С 17:00 до 02:00</p>
              </div>
            </div>
            <div className={styles.soc}>
              <div className={styles.inst}>
                <h4>Instagram</h4>
                <p>@spichki_bar</p>
                <p>@spichki_bar_ok19b</p>
              </div>
              <div className={styles.tg}>
                <h4>Telegram</h4>
                <p>@spichki_bar</p>
              </div>
              <div className={styles.tt}>
                <h1>TikTok</h1>
                <p>spichki_bar</p>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
