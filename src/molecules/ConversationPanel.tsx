import UserDM from "../atoms/UserDM";

export default function ConversationPanel(){
    return(
        <ul
            id="convoPanel"
            className="flex flex-col bg-blue-300 h-screen w-[294px] gap-2"
        >
            <li>
            <UserDM />
            </li>
            <li>
            <UserDM />
            </li>
            <span></span>
            <li>
            <UserDM />
            </li>
            <li>
            <UserDM />
            </li>
        </ul>
    )
}