import React from "react";
import { v4 as id } from "uuid";
import style from "./Statistics.module.css";
console.log(style);
// const newId = id();
//import dt from "../../db/db.statistics.json";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statlist}>
        {stats.map(({ label, percentage }) => (
          <li className={style.item} key={id()}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
