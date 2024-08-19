import React, { useState } from 'react';
import { IoSendOutline } from "react-icons/io5";
import axios from 'axios';
import { useChatContext } from '../store';

function ChatForm() {
    const [prompt, setPrompt] = useState("");
    
    const {setMessages, loading, setLoading} = useChatContext();
    async function submitHandler(event){
        event.preventDefault();
        if(loading) return;
        setLoading(true);
        setMessages((messages)=>[...messages, {
            content: prompt,
            author: 1,
        }]);
        try{       
            const data = await axios.post('http://127.0.0.1:5000/', {
                "question":prompt,
            });
            console.log(data.data[0].candidates[0].content);
            setMessages((messages) => [...messages, {
                content: data.data[0].candidates[0].content,
                author: 0,
            }]);
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
            setPrompt("");
        }
    }
    return (
        <form className='h-10 flex overflow-hidden' onSubmit={submitHandler}>
            <input type='text' className={`flex-grow bg-slate-200 pl-4 pr-4 ${loading ?'text-gray-500':'text-black'}`} value={prompt} onChange={(e)=>{setPrompt(e.target.value)}} readOnly={loading}/>
            <button className='h-10 pl-4 pr-4 bg-slate-400 text-center hover:bg-slate-500 text-white'><IoSendOutline /></button>
        </form>
    );
}

export default ChatForm;