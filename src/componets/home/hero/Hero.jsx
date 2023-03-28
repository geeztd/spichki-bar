import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <h1>Добро пожаловать в бар “Spichki”</h1>
        <p>
          "Бар Спички" - это уютное место с атмосферой, которая напоминает
          классический бар прошлых времен. Внутри вы найдете множество
          деревянных элементов интерьера, создающих ощущение тепла и комфорта.
        </p>
      </div>
      <img className={styles.img} src="image/hero.png" alt="hero" />
    </section>
  );
};

export default Hero;
