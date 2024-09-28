import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div className={classes.container}>
      <h1>{data.title}</h1>
      <div className={classes.grid__container}>
        {data.subCtegories?.map((item, i) => (
          <Link
            to={`/category/${item.name}`}
            key={i}
            className={classes.grid__item}
          >
            <div>
              <img src={item.image} alt={item.subTitle} />
            </div>
            <p>{item.subTitle}</p>
          </Link>
        ))}
      </div>
      <a
        href={`${data.moreProducts}`}
        target="_blank"
        className={classes.see__more}
      >
        See More
      </a>
    </div>
  );
}

export default CategoryCard;

