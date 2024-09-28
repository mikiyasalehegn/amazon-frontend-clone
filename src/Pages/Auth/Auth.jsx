import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./Auth.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorr, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({ signIn: false, signUp: false });
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const authHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signIn: false });
          setError(err.message);
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signUp: false });
          setError(err.message);
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_kz7Y3bmJBpcziRWEtNBtmwHtPf3Upk_3nXKtWqCovMMXA=s900-c-k-c0x00ffffff-no-rj"
          alt="Logo"
        />
      </Link>
      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              font: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="Email"> Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            name="signin"
            type="submit"
            onClick={authHandler}
            className={classes.login__button}
          >
            {" "}
            {loading.signIn ? (
              <ClipLoader size={15} color="#000" />
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLON Conditions of use and
          sale. Please see our Privacy Notice, Cookies Notice, and our
          interest-based on Ads Notice
        </p>
        <button
          type="submit"
          className={classes.create__account__button}
          onClick={authHandler}
          name="signup"
        >
          {" "}
          {loading.signUp ? (
            <ClipLoader size={15} color="#000" />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {erorr && (
          <small style={{ padding: "10px", color: "red" }}>{erorr}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
