import Button from "@mui/material/Button";
import React from "react";
import "./login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    // e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user._delegate.photoURL);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user._delegate.displayName,
          profileURL: result.user._delegate.photoURL,
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="Profile"
        />
        <h1>Sign in to Slack</h1>
        <Button variant="contained" onClick={signIn}>
          Sign in{" "}
        </Button>
      </div>
    </div>
  );
};

export default Login;
