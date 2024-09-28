import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import classes from "./Results.module.css";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import EmptyState from "./EmptyState/EmptyState";
import Loader from "../../components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${productUrl}/products/category/${categoryName}`
        );

        setResults(response.data);
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
    <Layout whiteBg={false}>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "20px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          <div
            className={
              results[0] ? classes.product__container : classes.empty_container
            }
          >
            {results[0] ? (
              results?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  flexed={false}
                  hideAddToCart={false}
                />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
