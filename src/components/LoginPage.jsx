import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import io from "socket.io-client";

import InputField from "./InputField.jsx";
import ChatBox from "./ChatBox";

export default function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [socket, setSocket] = useState(io(socketUrl));
  const [chats, dispatch] = useReducer(reducer, []);
  const [temp, setTemp] = useState("");

  const socketUrl = "http://localhost:3000";
  const initSocket = io(socketUrl);
  function reducer(state, action) {
    switch (action.type) {
      case "add-message":
        return [...state, { chat: action.chat, className: action.className }];

      default:
        return state;
    }
  }

  useEffect(() => {
    if (logged) {
      console.log(chats);
      socket.on("pm", addMessage.bind(null, "interlocutor"));
    }
  }, [logged, username]);

  const addMessage = (className, chat) => {
    dispatch({ type: "add-message", chat, className });
  };

  const submitLogIn = () => {
    const state = [username, password];
    const setState = [setUsername, setPassword];
    let bool = true;
    for (let i = 0; i < state.length; i++) {
      if (!state[i].length) {
        bool = false;
      }
    }
    setTemp(username);
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
          socket.emit("login", data.data);
          console.log(data.data, "<-- data.data");
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
    return (
      <div>
        <ChatBox chats={chats} socket={socket} username={temp} />
        <button onClick={submitLogOut}>Log Out</button>
      </div>
    );
  }
}

// onSubmit={}
