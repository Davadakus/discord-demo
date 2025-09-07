import UserDM from "../molecules/UserDM";
import { useState } from "react";
import friendsList from "../friends.json"
import SideBarOptions from "../molecules/SideBarOptions";
import { SelectionProps } from "../SelectionProps";

export default function PageList({ selected, setSelected }: SelectionProps){
    // const [Selected, setSelected] = useState<number | null>(null);
    // const users = friendsList.map(user => (
    //     <li>
    //         <UserDM key={user.id} name={user.name} />
    //     </li>
    // ));

    return(
        <ul
            id="pageList"
            className="flex flex-col flex-1 bg-[#121214] h-screen gap-2 items-center border border-neutral-800 rounded pt-3"
        >
            <li>
                <SideBarOptions name="Friends" selected={-1 === selected} onClick={() => setSelected(-1)} />
            </li>
            <li>
                <SideBarOptions name="Shop" selected={-2 === selected} onClick={() => setSelected(-2)} />
            </li>
            <li>
                <SideBarOptions name="Friends" selected={-3 === selected} onClick={() => setSelected(-3)} />
            </li>
            <span className="span_conversation"></span>
            {friendsList.map(user => (
                <li key={user.id}>
                    <UserDM  name={user.name} selected={user.id === selected} onClick={() => setSelected(user.id)} />
                </li>
            ))}
        </ul>
    )
}