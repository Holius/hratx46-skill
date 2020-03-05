import React, { useState, useEffect } from "react";
import axios from "axios";
// import io from "socket.io-client";

import InputField from "./InputField.jsx";

export default function ChatBox({ chats, socket, username }) {
  const checkTarget = username => {
    if (username === "a") {
      console.log("asdf");
      return "b";
    } else {
      console.log("whi", username);
      return "a";
    }
  };
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState(checkTarget(username));

  console.log(target);
  return (
    <div>
      <div>{(username === "a") + "          " + target}</div>
      <InputField
        forid="Message"
        type="text"
        value={message}
        setValue={setMessage}
      />
      <button
        onClick={event => {
          addMessage("self", message);
          console.log(message);
          socket.emit("private", target, message);
        }}
      ></button>
    </div>
  );
}
