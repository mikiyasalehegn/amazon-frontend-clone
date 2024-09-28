import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { db } from "../../Utility/firebase";
import classes from "./Orders.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
          console.log(snapshot);
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <Layout whiteBg={false}>
      <section className={classes.container}>
        <div className={classes.order__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet</div>
          )}
          {/* Order items */}
          <div>
            {orders?.map((order, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {order.id}</p>
                  {order?.data?.cart?.map((item) => (
                    <ProductCard
                      key={item.id}
                      product={item}
                      flexed={true}
                      descr={false}
                      hideAddToCart={true}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
