import { useEffect, useState } from "react";
import friendsList from "../data/friends.json"
import MessageBox from "../atoms/MessageBox";

interface MainPanelProps{
    selected: number | null;
}

type Message = {
  messageId: number;
  senderId: number;
  message: string;
  time: string;
};

export default function MainPanel({ selected }: MainPanelProps){
    const [text, setText] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [userName, setUserName] = useState("");

    // Fetch messages whenever the selected user changes
    useEffect(() => {
        if (!selected) return;
        async function fetchUser() {
            try {
                const res = await fetch(`http://localhost:3000/user/${selected}`);
                const data = await res.json();
                
                const converted = JSON.stringify(data)
                
                const sender = friendsList.find(u => u.userId === selected);
                setUserName(sender?.name ?? "Unknown");
 
                // console.log(sender);
                // console.log(converted);
                setMessages(data);
            } catch (err) {
                console.error("Failed to fetch messages", err);
            }
        }
        fetchUser();
    }, [selected]);
    
    // async function sendMessage(userId: number, text: string) {
    //     try {
    //         const res = await fetch("http://localhost:3000/send", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ userId, message: text }),
    //         });

    //         const data = await res.json();
    //         console.log("Server response:", data); // contains success and updated messages
    //         return data.messages; // updated array of messages
    //     } catch (err) {
    //         console.error("Failed to send message:", err);
    //     }
    // }

    async function keyPress(e){
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // prevent newline
            console.log("Enter!")
            if (!selected) return;

            const updatedMessages = await sendMessage(selected, text);
            setMessages(updatedMessages); // update state with latest messages
            setText(""); // clear textarea
        }    
    }
    
    return(
        <div className="flex flex-1 flex-col bg-[#1A1A1E] h-full">
            <div className="flex flex-1 flex-col text-white">
                {messages.map((msg) => (
                    <MessageBox key={msg.messageId} username={userName}>
                        <p>{msg.message}</p>
                    {/* <small>{new Date(msg).toLocaleTimeString()}</small> */}
                    </MessageBox>
                ))}
            </div>
            <div className="flex flex-col px-2 h-[78px] ">
                <form className="flex flex-row bg-neutral-800 h-[58px] rounded-xl items-center pl-3" action="/submit-post" method="POST">
                    <textarea 
                        className="textInputArea" 
                        placeholder="Message This User" 
                        name="text"
                        onKeyDown={(e) => keyPress(e)}
                    ></textarea>
                </form>

                {/* <div className="flex bg-neutral-800 h-[58px] rounded-2xl"> 

                </div> */}
            </div>
        </div>
    )
}