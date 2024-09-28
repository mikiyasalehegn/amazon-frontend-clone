import React from "react";
import classes from "./EmptyState.module.css";
import { Link } from "react-router-dom";

function EmptyState() {
  return (
    <div>
      <div className={classes.container}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt="Cloud icon"
          className={classes.image}
        />
        <p className={classes.message}>
          The product is not currently available in our store
        </p>
        <p className={classes.instructions}>
          Go to home page to find other products
        </p>
        <Link to="/" className={classes.btn}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default EmptyState;
