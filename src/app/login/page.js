"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const Login = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/");
  }

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
            <h2>Continue to NFSU SWC Portal</h2>
          </div>
          {/* <div className="loginCredentials">
            <Form.Control placeholder="Username" />
            <Form.Control placeholder="Password" />
          </div> */}
          <div className="otherLogins">
            <p>
              Kindly use the following accounts : <br />
            </p>
            <div className="imgsDiv">
              <button onClick={() => signIn("google")}>
                <img
                  src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg"
                  alt="Google"
                />
              </button>
              <button onClick={() => signIn("github")}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Github"
                />
              </button>
              {/* <button onClick={() => signIn("facebook")}>
                <img
                  src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png"
                  alt="Facebook"
                />
              </button> */}
            </div>
          </div>
          {/* <div className="forgotPasswordLinkDiv">
            <Link href="#">Forgot Password ? </Link>
          </div> */}
          {/* <div className="captchaBox">captcha div</div> */}
          {/* <div className="loginButton">
            <Button variant="danger" size="lg">
              Sign-In
            </Button>
          </div>
          <div className="registerLink">
            <Link href="/register">Register Here</Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
