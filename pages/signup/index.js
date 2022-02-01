import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Head from "next/head";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const fullNames = useRef();

  const buttonValue = "Signup";

  const submitHandler = (e) => {
    fullName.length > 0 &&
    email.length > 0 &&
    email.includes("@") &&
    mobileNumber.length > 6 &&
    mobileNumber.length < 16 &&
    password.length > 7
      ? ""
      : e.preventDefault();
    const name = fullNames.current.value;
    console.log("this is came form ref" + name);
    name = " ";

    Axios.post("http://weteachbyblogsdb.chrpmome0sw2.ap-south-1.rds.amazonaws.com:3001/api/signup", {
      fullName: fullName,
      email: email,
      mobileNumber: mobileNumber,
      password: password
    }).then(() => {
      // alert("done");
    });
    const include = email.includes("@");

    console.log(include);

    if (fullName.length < 1) {
      setFullNameError(true);
    }
    if (email.length < 1) {
      setEmailError(true);
    }

    mobileNumber.length > 4 && mobileNumber.length < 17
      ? ""
      : setMobileNumberError(true);

    password.length > 7 ? "" : setPasswordError(true);

    if (include == false) {
      setEmailError(true);
    }
  };

  return (
    <>
      <div>
        <Head>
          <title>SignUp Page - weteachbyblogs</title>
        </Head>
        <div className="login_body">
          <div className="background2">
            <div className="shape xl:mt-10"></div>
            <div className="shape mr-10  md:mb-16 lg:mb-0 "></div>
          </div>
        </div>
        <form className="form2   w-72 md:w-3/6 md:relative md:top-96 md:mt-24  lg:relative lg:top-96 lg:mt-80 lg:w-3/6 xl:mt-0 xl:w-96">
          <h3 className="relative bottom-8 h-2">Register Here</h3>
          <label htmlFor="fullname" className="labels">
            Full Name <span className="text-red-700 font-semibold">*</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            id="username"
            className="contact_sub"
            ref={fullNames}
            required
            onSelect={() => {
              if (fullName.length > 0) {
                setFullNameError(false);
              }
            }}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />

          {fullNameError && (
            <p className="text-red-700">Please Enter Valid Full Name</p>
          )}
          <label htmlFor="email" className="labels">
            Email <span className="text-red-700 font-semibold">*</span>
          </label>
          <input
            type="text"
            className="contact_sub"
            placeholder="Email"
            id="email"
            required
            onSelect={() => {
              if (email.length > 0) {
                setEmailError(false);
              }
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {emailError && (
            <p className="text-red-700">Please Enter Valid Email</p>
          )}

          <label htmlFor="MobileNumber" className="labels">
            Mobile Number <span className="text-red-700 font-semibold">*</span>
          </label>
          <input
            type="number"
            className="contact_sub"
            placeholder="Mobile Number"
            id="MobileNumber"
            required
            onInput={() => {
              if (mobileNumber.length > 4 && mobileNumber.length < 17)
                setMobileNumberError(false);
            }}
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
          />

          {mobileNumberError && (
            <p className="text-red-700">Please Enter Valid Mobile Number</p>
          )}

          <label htmlFor="password" className="labels">
            Password <span className="text-red-700 font-semibold">*</span>
          </label>

          <input
            type="password"
            className="contact_sub"
            placeholder="Password"
            id="password"
            required
            onSelect={() => {
              if (password.length > 7) setPasswordError(false);
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && (
            <p className="text-red-700">Please Enter Atleast 8 Characters</p>
          )}

          {console.log(fullName, email, password)}
          {fullName.length > 0 &&
          email.length > 0 &&
          email.includes("@") &&
          mobileNumber.length > 6 &&
          mobileNumber.length < 16 &&
          password.length > 7 ? (
            <Link passHref href="/login">
              <button className="login" value="signup" onClick={submitHandler}>
                {buttonValue}
              </button>
            </Link>
          ) : (
            <button
              className="login bg-red-700 bg-opacity-50 hover:bg-red-500 "
              onClick={submitHandler}
            >
              Signup
            </button>
          )}

          <div className="float-right  text-blue-500  hover:text-blue-900   mt-2">
            <Link passHref href="/login">
              <button className="font-semibold hover:font-bold  ">
                Already have Account Login?
              </button>
            </Link>
          </div>
          {/* <div className="social">
          <div className="go">
            <a href="/">Google</a>
          </div>
          <div className="fb">
            <a href="/">Facebook</a>
          </div>
        </div> */}
        </form>
      </div>
    </>
  );
};

export default SignUp;
