import React, { useContext, useState } from "react";
import Layout from "../../components/Layout/Layout";
import classes from "./Payments.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payments() {
  const [{ user, cart }, dispatch] = useContext(DataContext);
  const [cardError, setcardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const totalItems = cart.reduce((accumulator, product) => {
    return accumulator + product.amount;
  }, 0);
  const totalPrice = cart.reduce((accumulator, product) => {
    return accumulator + product.price * product.amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e?.error?.message ? setcardError(e?.error?.message) : setcardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setProcessing(true);
      // 1. backend || functions ---> client secrete
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${parseInt(totalPrice)}`,
      });
      const clientSecret = response.data?.clientSecret;
      //2.client side confirmation
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      console.log(paymentIntent);

      // 3. After the confirmation ---> set order, save to firebase db, clear cart
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // Clean the cart
      dispatch({
        type: Type.EMPTY_CART,
      });
      setProcessing(false);
      navigate("/orders", { state: { msg: "You have new orders" } });
    } catch (error) {
      setProcessing(false);

      console.log(error);
    }
  };

  return (
    <Layout whiteBg={false}>
      {/* header */}
      <div className={classes.payment__header}>
        Checkout ({totalItems}) items
      </div>
      {/* body */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 react lane</div>
            <div>Tel Aviv</div>
          </div>
        </div>
        <hr />
        {/* product */}

        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {cart.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                flexed={true}
                descr={false}
                hideAddToCart={true}
              />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.payment__card__box}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span
                      style={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <p
                        style={{
                          borderRight: "1px solid gray",
                          paddingRight: "7px",
                        }}
                      >
                        Total Order
                      </p>{" "}
                      <p>{totalItems}</p>
                      <p>$ {totalPrice}</p>
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loader}>
                        <ClipLoader size={15} color="#000" />
                        <p>Processing...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payments;
