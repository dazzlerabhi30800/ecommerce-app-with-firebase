import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth, provider } from "../../context/FirebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/SetContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const googleAuth = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <main className="credentials--wrapper">
      {!currentUser ? (
        <div className="formWrapper">
          <h1>Shopsy Login Form</h1>
          <form onSubmit={handleSubmit}>
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
          <button onClick={googleAuth} className="googleAuth">
            {" "}
            <FcGoogle /> Google Login
          </button>
        </div>
      ) : (
        <div style={{ fontSize: "1.5rem", color: "red", fontWeight: "700" }}>
          You Are Already Logged In
        </div>
      )}
    </main>
  );
};

export default Login;
