import React, { useState, useEffect } from "react";

const socketUrl = "http://localhost:3000";

export function ChatBox(props) {
  // Declare a new state variable, which we'll call "count"
  const { chats } = props;

  let displayChat = [];
  for (let i = 0; i < chats.length; i++) {
    displayChat.push(
      <div className={chats[i].className} key={i}>
        {chats[i].chat}
      </div>
    );
  }

  return <div className="ohyeah">{displayChat}</div>;
}

// className={chats[i].className}
