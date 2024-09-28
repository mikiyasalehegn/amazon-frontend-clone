import React from "react";
import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flexed, descr, hideAddToCart }) {
  const { image, title, id, rating, price } = product;
  console.log(product);
  const [state, dispatch] = useContext(DataContext);
  console.log(product);

  const addToCart = () => {
    dispatch({ type: Type.ADD_TO_CART, item: product });
  };
  return (
    <div
      className={`${classes.product_card} ${
        flexed ? classes.product_flex : ""
      }`}
    >
      <Link to={`/products/${id}`} className={classes.image__box}>
        <img src={image} alt={title} />
      </Link>
      <div className={classes.content}>
        <p className={classes.product__name}>
          {title > 20 ? `${title.slice(0, 20)}...` : title}
        </p>
        <div>{descr ? product?.description : null}</div>
        <div className={classes.rating}>
          <span>★★★☆☆</span>
          <span>({rating?.count})</span>
        </div>
        <div>
          <p className={classes.price}>${price}</p>
        </div>
        {hideAddToCart ? null : (
          <button className={`${classes.add__to__cart}`} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
