import React from "react";
import'./otp.css';

const OTP = () => {
  return (
    <div className="wrapper">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <h1>Email Verification</h1>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <h3>We have sent a code to your email </h3>
            </div>
          </div>

          <div>
            <form>
              <div className="flex flex-row justify-between">
                <input
                  maxLength="1"
                  className="input"
                  type="text"
                  name=""
                  id=""
                ></input>
                <input
                  maxLength="1"
                  className="input"
                  type="text"
                  name=""
                  id=""
                ></input>
                <input
                  maxLength="1"
                  className="input"
                  type="text"
                  name=""
                  id=""
                ></input>
                <input
                  maxLength="1"
                  className="input"
                  type="text"
                  name=""
                  id=""
                ></input>
              </div>

              <div className="button-container">
                <button type="submit">Verify Account</button>
              </div>
              <div className="register">
                <p>
                  Didn't receive code? <a href="#">Resend</a>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
