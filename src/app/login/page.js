"use client";
import Link from "next/link";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const handleSubmit = async () => {
    let res = await fetch("http://localhost:3000/api/login");
    let data = res.json();
    if (data) {
      console.log("logged in successfully");
      console.log(data);
    } else {
      console.log("login failed"); 
    }
  };
  return (
    <>
      <div div className="loginPage">
        <div className="inputBoxContainer">
          <div className="logoDiv">
            <img
              src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1710502741/emblem_e7gmxn.png"
              alt=""
            />
          </div>
          <div className="headingText">
            <h2>Sign-in to NFSU SWC Portal</h2>
          </div>
          <div className="loginCredentials">
            <Form.Control placeholder="Username" />
            <Form.Control placeholder="Password" />
          </div>
          <div className="forgotPasswordLinkDiv">
            <Link href="#">Forgot Password ? </Link>
          </div>
          <div className="captchaBox">captcha div</div>
          <div className="loginButton">
            <Button variant="danger" size="lg" onClick={handleSubmit}>
              Sign-In
            </Button>
          </div>
          <div className="registerLink">
            <Link href="/register">Register Here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
