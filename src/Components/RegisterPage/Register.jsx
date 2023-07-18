import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth, provider } from "../../context/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
      <div className="formWrapper">
        <h1>Shopsy SignUp Form</h1>
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
            Sign In
          </button>
        </form>
        <span>
          Already have an account <Link to="/login">Login</Link>
        </span>
        <span style={{ fontWeight: "600" }}>OR</span>
        <button onClick={googleAuth} className="googleAuth">
          {" "}
          <FcGoogle /> Google Login
        </button>
      </div>
    </main>
  );
};

export default Register;
