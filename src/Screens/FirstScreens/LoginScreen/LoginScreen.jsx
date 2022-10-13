import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebase";
import { login } from "../../../redux/features/userSlice";
import { Redirect, useHistory } from "react-router-dom";
import "./style.css";
import Loading from "../../../Components/Common/LoadingComponent/Loading";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignInPress = (e) => {
    e.preventDefault();
    // Sign in an existing user with Firebase
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      // returns  an auth object after a successful authentication
      // userAuth.user contains all our user details
      .then((userAuth) => {
        // store the user's information in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
        setLoading(false);
        // navigate("/");
        history.push("/");
      })
      // display function(error)the error if any
      .catch(function (error) {
        // let errorMessage = mapAuthCodeToMessage(error.code);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div class="login-page">
      <div class="loginContainer">
        {loading === true ? (
          <Loading />
        ) : (
          <>
            <h1>Admin</h1>
            <form method="post">
              <div class="txt_field">
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span></span>
                <label>Username/Email</label>
              </div>
              <div class="txt_field">
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span></span>
                <label>Password</label>
              </div>

              <div class="pass">Forgot Password?</div>
              {error && <p className="error">{error}</p>}
              <input type="submit" onClick={onSignInPress} value="Login" />
              <div class="singup_link">
                Having trouble logging in? <a href="#">Contact us</a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
