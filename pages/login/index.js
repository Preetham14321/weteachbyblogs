import Link from "next/link";
import React, { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
// import { BsGoogle } from "react-icons/bs";
// import { BsFacebook } from "react-icons/bs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const [homedir, setHomedir] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const loginVar = "Login";
  const router = useRouter();
  console.log(router.pathname);
  if (typeof window !== "undefined") {
    localStorage.setItem(email, 1);
  }
  if (router.pathname === "/") {
    router.reload(window.location.pathname);
  }

  const emailValid = email.includes("@");
  const submitHandler = (e) => {
    console.log("first" + refresh);
    e.preventDefault();
    // refresh ? router.push("/") : "";
    localStorage.setItem(1, email);
    console.log("second" + refresh);
    console.log(e);
    Axios.post("http://localhost:3001/api/login", {
      email: email,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        setRefresh(false);
        console.log(e);
      } else {
        console.log(response);
        setLoginStatus("");
        setHomedir(true);
        if (email.length > 0 && !response.data.message && password.length > 0) {
          setRefresh(true);
          refresh ? router.push("/") : "";
        }
      }
    });

    if (email.length < 1) {
      setEmailError(true);
    }
    if (!emailValid) {
      setEmailError(true);
    }
    if (password.length < 1) {
      setPasswordError(true);
    }
  };
  return (
    <>
      <div>
        <Head>
          <title>Login Page - weteachbyblogs</title>
        </Head>
        <div className="login_body">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
        </div>
        <form action="">
          <h3 className="mb-10 ">Login Here</h3>

          <h1 className="text-red-700 login_warn text-sm font-semibold  md:ml-2">
            {loginStatus}
          </h1>

          <label htmlFor="username" className="labels">
            Email <span className="text-red-700 font-semibold">*</span>
          </label>
          <input
            type="email"
            placeholder="Email "
            id="username"
            required
            className="contact_sub"
            onSelect={() => {
              setEmailError(false);
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError && (
            <p className="text-red-700">Please Enter Valid Email </p>
          )}

          <label htmlFor="password" className="labels">
            Password <span className="text-red-700 font-semibold">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="contact_sub"
            required
            onSelect={() => {
              setPasswordError(false);
            }}
            minLength="2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && (
            <p className="text-red-700">Please Enter Valid Password</p>
          )}

          {refresh && email.length > 0 && password.length > 0 ? (
            <Link passHref href="/">
              <button className="login mb-2" onClick={submitHandler}>
                {loginVar}
              </button>
            </Link>
          ) : (
            <button
              className="login bg-red-700 bg-opacity-50 hover:bg-red-500 "
              onClick={submitHandler}
            >
              Login
            </button>
          )}

          {/* <button className="login" onClick={submitHandler}>
          Login
        </button> */}

          <div className="float-right mr-2  text-blue-500  hover:text-blue-900  hover:font-semibold mt-2  shadow-sm ">
            <Link href="/signup ">Sign Up?</Link>
          </div>
          {/* <div className="social">
          <div className="go flex text-center ">
            <BsGoogle className="ml-2 mt-1 " />
            <a href="/" className="ml-1 font-semibold">
              Google
            </a>
          </div>
          <div className="fb flex">
            <BsFacebook className="ml-2 mt-1" />
            <a href="/" className="ml-1 font-semibold">
              Facebook
            </a>
          </div>
        </div> */}
        </form>
      </div>
    </>
  );
};

export default Login;
