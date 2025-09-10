import { useEffect, useState } from "react";
import friendsList from "../data/friends.json"
import MessageBox from "../atoms/MessageBox";

interface MainPanelProps{
    selected: number | null;
}

type Message = {
  messageId: number;
  senderId: number;
  receiverId: number;
  message: string;
  time: string;
};

export default function MainPanel({ selected }: MainPanelProps){
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    // const [userName, setUserName] = useState("");

    // Fetch messages whenever the selected user changes
    useEffect(() => {
        fetchUser();
        setInputText("");
    }, [selected]
    );
    
    async function fetchUser() {
        try {
            const res = await fetch(`http://localhost:3000/user/${selected}`);
            const data = await res.json();
            // const converted = JSON.stringify(data)
            // const sender = friendsList.find(u => u.userId === selected);
            // setUserName(sender?.name ?? "Unknown"); 
            setMessages(data);
            // console.log(sender);
            // console.log(converted);
        } catch (err) {
            console.error("Failed to fetch messages", err);
        }
    }

    const handleSubmit = async () => {
        if (!inputText.trim()) return fetchUser(); 
        

        const date = new Date();
        const res = await fetch("http://localhost:3000/submit-post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messageId: messages.length+1, senderId: 3, receiverId: selected, message: inputText, time: date }),
        });
        const data = await res.json();
        // console.log(JSON.stringify(data));
        setInputText("");
        fetchUser();
        // setInputText("");
    }

    async function keyPress(e){
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
            
        }    
    }
    
    return(
        <div className="flex w-full flex-col h-[calc(100vh-32px)] bg-[#1A1A1E]">
            <div className="flex-col flex flex-1 overflow-auto text-white">
                {
                    messages.map((msg) => {    
                        const sender = friendsList.find(u => u.userId === msg.senderId);
                        const senderName = sender?.name ?? "Unknown";
                    
                        return (
                            <MessageBox key={msg.messageId} username={senderName}>
                                <p>{msg.message}</p>
                            {/* <small>{new Date(msg).toLocaleTimeString()}</small> */}
                            </MessageBox>
                        );
                    })}
            </div>
            <div className="flex flex-col px-2 h-[78px] ">
                <form className="flex flex-row bg-neutral-800 h-[58px] rounded-xl items-center pl-3" 
                    onSubmit={handleSubmit}>
                    <textarea 
                        className="textInputArea" 
                        placeholder="Message This User" 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(k) => keyPress(k)}
                    ></textarea>
                </form>
            </div>
        </div>
    )
}