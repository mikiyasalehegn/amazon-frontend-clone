import React from "react";
import Layout from "../../components/Layout/Layout";
import classes from "./ProductDetail.module.css";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import { productUrl } from "../../Api/endPoints";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./ProductDetail.module.css";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${productUrl}/products//${productId}`
        );

        setProduct(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout whiteBg={true}>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Product Details</h1>
          <hr />
          <div className={classes.product__container}>
            <ProductCard
              product={product}
              flexed={true}
              descr={true}
              hideAddToCart={false}
            />
          </div>
        </section>
      )}
    </Layout>
  );
}

export default ProductDetail;
