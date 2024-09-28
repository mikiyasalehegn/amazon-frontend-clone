import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ cart, user }, dispatch] = useContext(DataContext);
  // const [loading, setLoading] = useState({ signIn: false, signUp: false });

  const totalItems = cart.reduce((accumulator, product) => {
    return accumulator + product.amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon log"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <IoLocationOutline size={25} />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Israel</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            {/* icon */}
            <FaSearch size={38} />
          </div>
          {/* otheres section */}
          <div className={classes.order__container}>
            <div>
              <Link to="" className={classes.language}>
                <img
                  src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
                  // alt="USA flag"
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
            </div>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p> {user?.email.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello sign in</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <PiShoppingCartSimpleBold size={35} />
              <span>{totalItems}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
