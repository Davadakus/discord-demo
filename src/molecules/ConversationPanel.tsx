import UserDM from "../atoms/UserDM";
import { useState } from "react";
import friendsList from "../friends.json"

export default function ConversationPanel(){
    const [Selected, setSelected] = useState<string | null>(null);
    // const users = friendsList.map(user => (
    //     <li>
    //         <UserDM key={user.id} name={user.name} />
    //     </li>
    // ));

    return(
        <ul
            id="convoPanel"
            className="flex flex-col flex-1 bg-[#121214] h-screen gap-2 items-center border border-stone-700 rounded pt-3"
        >
            <li>
                <UserDM name="Friends"/>
            </li>
            <span className="span_conversation"></span>
            {friendsList.map(user => (
                <li key={user.id}>
                    <UserDM  name={user.name} selected={user.name === Selected} onClick={() => setSelected(user.name)} />
                </li>
            ))}
        </ul>
    )
}