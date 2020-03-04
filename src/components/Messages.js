import React, { useState, useEffect, useReducer } from "react";
import io from "socket.io-client";

import { ChatBox } from "./ChatBox";

const socketUrl = "http://localhost:3000";

function reducer(state, action) {
  switch (action.type) {
    case "add-message":
      return [...state, { chat: action.chat, className: action.className }];

    default:
      return state;
  }
}

export function Messages() {
  // Declare a new state variable, which we'll call "count"
  const [socket, setSocket] = useState(io(socketUrl));
  const [user, setUser] = useState("");
  const [target, setTarget] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [chats, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    console.log(chats);
    socket.on("pm", addMessage.bind(null, "interlocutor"));
  }, [socket]);

  const initSocket = () => {
    socket.on("log", () => {
      console.log("Connected");
    });
  };

  const addMessage = (className, chat) => {
    dispatch({ type: "add-message", chat, className });
  };

  return (
    <div>
      <input
        type="text"
        onChange={event => {
          setUser(event.target.value);
        }}
        value={user}
      />
      <button
        onClick={() => {
          setUser("");
          socket.emit("log", user);
        }}
      >
        Set User {user}
      </button>
      <div>{user}</div>
      <input
        type="text"
        onChange={event => {
          setTarget(event.target.value);
        }}
        value={target}
      />
      <button
        onClick={event => {
          setTarget(event.target.value);
        }}
      >
        Set Target
      </button>
      <div>{target}</div>
      <ChatBox chats={chats} />
      <input
        type="text"
        onChange={event => {
          setMessage(event.target.value);
        }}
        value={message}
      />
      <button
        onClick={event => {
          addMessage("self", message);
          console.log(message);
          socket.emit("private", target, message);
        }}
      >
        Set Message{" "}
      </button>
    </div>
  );
}
