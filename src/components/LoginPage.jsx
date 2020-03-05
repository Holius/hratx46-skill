import React, { useState, useEffect } from "react";
import axios from "axios";

import InputField from "./InputField.jsx";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  // useEffect(() => {}, [logged]);

  const submitLogIn = () => {
    const state = [username, password];
    const setState = [setUsername, setPassword];
    let bool = true;
    for (let i = 0; i < state.length; i++) {
      if (!state[i].length) {
        bool = false;
      }
    }
    if (bool) {
      for (let i = 0; i < setState.length; i++) {
        setState[i]("");
      }
      axios
        .post("/user/login", {
          username,
          password
        })
        .then(data => {
          setLogged(true);
          console.log("logged in");
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("nope");
    }
  };

  const submitLogOut = () => {
    axios
      .get("/user/logout")
      .then(data => {
        setLogged(false);
        console.log("logged out");
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!logged) {
    return (
      <div>
        <InputField
          forid="username"
          type="text"
          value={username}
          setValue={setUsername}
        />
        <br />
        <InputField
          forid="password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <button onClick={submitLogIn}>Log In </button>
        <br />
        <br />
        <br />
        <button>Needs to be linked to Sign Up page </button>
      </div>
    );
  } else {
    return <button onClick={submitLogOut}>Log Out </button>;
  }
}

// onSubmit={}
