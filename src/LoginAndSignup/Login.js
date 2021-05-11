import axios from "axios";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth-context";

export function LogIn() {
  const [checkResponseFromDataBase, setResponseFromDataBase] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  const [userExists, setUserExists] = useState("none");
  const [checkPassword, setCheckPassword] = useState("none");

  const {
    isUserLoggedIn,
    LogOut,
    setUserLogin,
    userName,
    setUserName
  } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    setUserExists("block");
    checkResponseFromDataBase === "user not found"
      ? setUserExists("block")
      : setUserExists("none");

    checkResponseFromDataBase === "wrong password"
      ? setCheckPassword("block")
      : setCheckPassword("none");

    checkResponseFromDataBase === "user auth successful" ||
    isUserLoggedIn === true
      ? setUserLogin(true)
      : setUserLogin(false);
  }, [checkResponseFromDataBase]);

  async function setResponseFromDB() {
    await axios
      .post("https://leadsidtechs.sandeepmehta215.repl.co/authcheck", {
        username: userName,
        password: passwordInput
      })
      .then((response) => {
        setResponseFromDataBase(response.data?.message);
      });
  }

  return (
    <div className="form">
      <h2>Login</h2>
      <label>Enter your user-name : </label>
      <input
        type="text"
        id="txt"
        placeholder="    User name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <small style={{ color: "red", display: userExists }}>
        User doesn't exists
      </small>
      <br />
      <label>Enter your password : </label>
      <input
        type="password"
        id="email"
        placeholder="     Password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />
      <br />

      <small style={{ color: "red", display: checkPassword }}>
        Enter Correct Password
      </small>

      <br />

      {!isUserLoggedIn && (
        <button
          className="LoginButton"
          onClick={() => {
            setResponseFromDB();
          }}
        >
          Login
        </button>
      )}
      {isUserLoggedIn && (
        <button className="LogOutButton" onClick={() => LogOut()}>
          LogOut
        </button>
      )}
      <br />
      {isUserLoggedIn && (
        <span style={{ color: "green" }}>
          {" "}
          User Logged in successfully &&{" "}
          {setTimeout(() => navigate("/address"), 2000)}
          <span role="img" aria-labelledby="emoji">
            ✅
          </span>
        </span>
      )}
    </div>
  );
}
