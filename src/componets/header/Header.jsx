import React, { useState } from "react";
import { headerData } from "./headerData";
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
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.mobile_header}>
        <img src="image/logo.svg" alt="logo" />
        <div
          className={styles.burger}
          onClick={(e) => {
            setBurger(!burger);
          }}
        >
          <span className={styles.one}></span>
          <span className={styles.two}></span>
          <span className={styles.three}></span>
        </div>
      </div>
      <ul
        className={`${styles.mobile_nav} ${
          burger ? styles.active : styles.hid
        }`}
      >
        {headerData.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
