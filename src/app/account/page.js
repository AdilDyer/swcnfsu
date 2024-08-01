"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Account = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="accountBig">
          <h1>Welcome {session.user.name}</h1>
          <p>Your email: {session.user.email}</p>
          <p>
            Your image: <img src={session.user.image} alt="Profile Pic" />
            <br />
          </p>
          <p>Session Expires at : {session.expires}</p>
        </div>
      ) : (
        <>
          <h1>Please Sign In</h1>
        </>
      )}
    </>
  );
};

export default Account;
