import React, { useEffect } from "react";
import { useChatContext } from "../store";

function ChatBox() {
    const {messages, loading} = useChatContext();
    useEffect(function(){
        document.getElementById("dummy").scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
        });
        
    }, [messages, loading])
  return (
    <div className="p-4 h-full overflow-y-auto">
      {messages.map(function (ele, index) {
        return (
          <div className={`chat chat-${ele.author===0?"start":"end"}`}  key={index}>
            <div className="chat-bubble bg-blue-300 text-black" style={{whiteSpace:'pre-wrap'}} >
              {ele.content}
            </div>
            
          </div>
        );
      })}
      {
        loading && <div className="w-full flex justify-center"><span className="loading loading-dots loading-lg mt-4"></span></div>
      }
      
      <div id="dummy"></div>
    </div>
  );
}

export default ChatBox;
