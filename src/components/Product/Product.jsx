import React from "react";
// import Layout from "../Layout/Layout";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className={classes.prod_container}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.category} />
      </Link>
      <div>
        <h3>{product.title}</h3>
        <div>
          <Rating value={product.rating.rate} precision={0.1} />
          <small>{product.rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={product.price} />
        </div>
        <button>Add to Cart</button>
      </div>
      {/* <div className={classes.left__section}>
        <div className={classes.back__link}>
          <Link to={`/category/${product.category}`}>&lt; Back to results</Link>
        </div>
        <div className={classes.product__image}>
          <img src={product.image} alt={product.category} />
        </div>
      </div>

      <div className={classes.middle__section}>
        <h1>{product.title}</h1>
        <div className={classes.rating}>
          <span className={classes.stars}>★★★★☆</span>
          <span className={classes.reviews}>783 ratings</span>
        </div>
        <p className={classes.price__discount}>
          -10% <span className={classes.new__price}>$112.49</span>
          <span className={classes.old__price}>$124.99</span>
        </p>
        <p className={classes.shipping}>Shipping: $184.53 to Israel</p>
        <p className={classes.delivery}>
          Delivery by: <strong>Wednesday, October 2</strong>
        </p>
        <div className={classes.product__details}>
          <h3>About this item:</h3>
          <p>{product.description}</p>
        </div>
      </div>

      <div className={classes.right__section}>
        <div className={classes.price__box}>
          <p className={classes.current__price}>$112.49</p>
          <p className={classes.per__count}>($4.89 / Count)</p>
          <p className={classes.stock__status}>In Stock</p>
          <label htmlFor="quantity">Quantity:</label>
          <select id="quantity" className={classes.prod__quantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button className={classes.add__to__cart__btn}>Add to Cart</button>
          <button className={classes.buy__now__btn}>Buy Now</button>
          <p className={classes.returns}>Ships from: Amazon.com</p>
          <p className={classes.returns}>30-day refund/replacement</p>
        </div>
      </div> */}
    </div>
  );
}

export default Product;
