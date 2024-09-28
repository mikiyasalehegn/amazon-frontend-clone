import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.css";

function Layout({ children, whiteBg }) {
  return (
    <div>
      <Header />
      <div
        className={
          whiteBg ? `${classes.white__bg} ${classes.wrapper}` : classes.wrapper
        }
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
