import React from "react";
import styles from "./history.module.scss";

const History = () => {
  return (
    <section>
      <div className={styles.about}>
        <div className={styles.box}>
          <img src="image/place.svg" alt="place" />
          <div>
            <p>Октяборьская, 19б</p>
            <p>Комсомольская,5а</p>
          </div>
        </div>
        <div className={styles.box}>
          <img src="image/clock.svg" alt="clock" />
          <div>
            <p>Каждый день</p>
            <p>с 17:00 до 2:00</p>
          </div>
        </div>
        <div className={styles.box}>
          <img src="image/insta.svg" alt="insta" />
          <div>
            <p>@spichki_bar </p>
            <p>@spichki_bar_ok19b</p>
          </div>
        </div>
      </div>
      <div className={styles.history}>
        <div className={styles.part1}>
          <img src="image/spichki1.jpg" alt="interior" />
          <p>
            "Бар Спички" - это уютное место с атмосферой, которая напоминает
            классический бар прошлых времен. Внутри вы найдете множество
            деревянных элементов интерьера, создающих ощущение тепла и комфорта.
            Оформление выполнено в духе старого Нью-Йорка, что добавляет
            заведению особого шарма.
          </p>
        </div>
        <div className={styles.part2}>
          <img src="image/spichki2.jpg" alt="interior" />
          <p>
            В нашем баре всегда приятно находиться, ведь здесь царит уютная
            атмосфера, которая позволяет расслабиться и насладиться вечером в
            хорошей компании. Это идеальное место для встречи с друзьями,
            свидания или просто отдыха после трудового дня.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
