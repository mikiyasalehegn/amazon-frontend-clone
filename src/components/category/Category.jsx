import React from "react";
import CategoryCard from "./CategoryCard";
import { gridCategoryDetails } from "./categoryData";
import classes from "./category.module.css";

function Category() {
  return (
    <>
      <div className={classes.main__box}>
        {gridCategoryDetails?.map((category, i) => (
          <CategoryCard key={i} data={category} />
        ))}
      </div>
    </>
  );
}

export default Category;
