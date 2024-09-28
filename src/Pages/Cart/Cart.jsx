import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

function Cart() {
  const [{ cart, user }, dispatch] = useContext(DataContext);
  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.amount;
  }, 0);
  const totalItems = cart.reduce((accumulator, product) => {
    return accumulator + product.amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_CART,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_CART,
      id,
    });
  };

  console.log("cart", cart);

  return (
    <Layout whiteBg={true}>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping cart</h3>
          <hr />
          <div className={classes.item__wrapper}>
            {cart?.length == 0 ? (
              <p>OOPS! No item in your cart</p>
            ) : (
              cart?.map((product, i) => (
                <section className={classes.cart__viewer}>
                  <ProductCard
                    product={product}
                    flexed={true}
                    descr={true}
                    hideAddToCart={true}
                    key={i}
                  />
                  <div className={classes.buttons}>
                    <button onClick={() => increment(product)}>
                      <RiArrowUpSLine size={25} />
                    </button>
                    <span>{product.amount}</span>
                    <button onClick={() => decrement(product.id)}>
                      <RiArrowDownSLine size={25} />
                    </button>
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
        {cart?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>({totalItems} items)</p>
              <p>{`$ ${totalPrice}`}</p>
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
