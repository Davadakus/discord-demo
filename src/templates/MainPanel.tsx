import { useState } from "react";

interface MainPanelProps{
    selected: number | null;
}

export default function MainPanel({ selected }: MainPanelProps){
    const [text, setText] = useState("");
    
    function keyPress(e){
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // prevent newline
            
      }    
    }
    
    return(
        <div className="flex flex-1 flex-col bg-[#1A1A1E] h-full">
            <div className="flex flex-1 ">
                {/* Display here the text history based of generated json file with userid as name */}
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