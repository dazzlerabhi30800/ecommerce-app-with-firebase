import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword);
  return (
    <main className="credentials--wrapper">
      <div className="formWrapper">
        <h1>Shopsy Login Form</h1>
        <form>
          <input type="email" placeholder="Enter your email" id="username" />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
          />
          <label
            className="pass--icon"
            htmlFor="password"
            onClick={() => setShowPassword((prevstate) => !prevstate)}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </label>
          <button className="submitBtn" type="submit">
            Login
          </button>
        </form>
        <span>
          Don't have an account <Link to="/register">Register</Link>
        </span>
        <span style={{ fontWeight: "600" }}>OR</span>
        <button className="googleAuth">
          {" "}
          <FcGoogle /> Google Login
        </button>
      </div>
    </main>
  );
};

export default Login;
