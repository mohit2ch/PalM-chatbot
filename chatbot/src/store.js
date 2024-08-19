import { createContext, useContext, useState } from "react";

const ChatContext = createContext(null);

export default function ChatProvider({children}){
    const [messages, setMessages] = useState([{
        content: "Hey, How can I help you?",
        author: 0,
      }
      ]);
    const [loading , setLoading] = useState(false);
    return <ChatContext.Provider value={{messages, setMessages, loading, setLoading}}>
        {children}
    </ChatContext.Provider>
}

export function useChatContext(){
    return useContext(ChatContext);
}