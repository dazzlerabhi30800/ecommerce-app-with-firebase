import React, { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth } from "../../context/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/SetContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

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

  return (
    <main className="credentials--wrapper">
      {!currentUser ? (
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
        </div>
      ) : (
        <div style={{ fontSize: "1.5rem", color: "red", fontWeight: "700" }}>
          You Are Already Logged In
        </div>
      )}
    </main>
  );
};

export default Register;
