import React from "react";
import styles from "../barMain.module.scss";

const DraftBeer = () => {
  const { XMLParser } = require("fast-xml-parser");
  const XMLData = `<xml>
        <name>Old Bobby Ale</name>
        <cost>5.00/7.00</cost>
        <div>Красный эль</div>
    </xml>`;

  const parser = new XMLParser();
  const jObj = parser.parse(XMLData);

  return (
    <div className={styles.beer}>
      <h2>
        <p>Разливное пиво</p>
        <p>0.3л/0.5л</p>
      </h2>
      <div className={styles.box}>
        <div className={styles.item}>
          <p>{jObj.xml.name}</p>
          <p>{jObj.xml.cost}</p>
        </div>
        <p className={styles.struct}>{jObj.xml.div}</p>
      </div>
      <div className={styles.box}>
        <div className={styles.item}>
          <p>Kriek de lutin</p>
          <p>7.00/9.00</p>
        </div>
        <p className={styles.struct}>Вишневый эль</p>
      </div>
    </div>
  );
};

export default DraftBeer;
