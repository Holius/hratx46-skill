import React, { useState, useEffect } from "react";
import axios from "axios";
// import io from "socket.io-client";

import InputField from "./InputField";
import useUnload from "./useUnload";

export default function ChatBox({
  chats,
  socket,
  username,
  addMessage,
  addHistory,
  id
}) {
  const checkTarget = username => {
    if (username === "a") {
      return "b";
    } else {
      return "a";
    }
  };
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState(checkTarget(username));

  useEffect(() => {
    const mount = () => {
      socket.emit("mount", target);
      axios
        .post("chat/history", {
          username,
          target
        })
        .then(data => {
          addHistory(data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    mount();
  }, []);

  useUnload(() => {
    socket.emit("unmount");
    console.log("will unmount");
  });

  let displayChat = [];
  for (let i = 0; i < chats.length; i++) {
    displayChat.push(
      <div
        className={id === chats[i].from_username ? "self" : "interlocutor"}
        key={i}
      >
        {chats[i].message_text}
      </div>
    );
  }

  return (
    <div>
      <div>{target}</div>
      <InputField
        forid="Message"
        type="text"
        value={message}
        setValue={setMessage}
      />
      <button
        onClick={event => {
          addMessage(id, message);
          console.log(message);
          socket.emit("private", target, message);
        }}
      >
        Send
      </button>
      <div className="ohyeah">
        {displayChat}
        <div id="anchor"></div>
      </div>
    </div>
  );
}
