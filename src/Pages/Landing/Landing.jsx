import React from "react";
import Layout from "../../components/Layout/Layout";
import CarouselEffect from "../../components/carousel/CarouselEffect";
import Category from "../../components/category/Category";

function Landing() {
  return (
    <Layout whiteBg={false}>
      <CarouselEffect />
      <Category />
      <div style={{ padding: "30vh" }}></div>
    </Layout>
  );
}

export default Landing;
