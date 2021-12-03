import React, { useEffect, useState, useContext } from "react";

import { Context } from '../context';

import { useRouter } from "next/router";
import dynamic from 'next/dynamic';

const ChatEngine = dynamic(() => 
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial =  dynamic(() => 
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat ] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null){
      setShowChat(true);
    }

    if (!showChat) return <div />
  },[])

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height='calc(100vh - 200px)'
          projectID='66427da2-8229-4596-8740-abc950ed7250'
          userName={username}
          userSecret={secret}
        />
      </div>
    </div>
  )
}
