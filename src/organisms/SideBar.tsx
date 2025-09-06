import ServerIcon from "../atoms/ServerIcon";
import UserDM from "../atoms/UserDM";
import ConversationPanel from "../molecules/ConversationPanel";
import ServerList from "../molecules/ServerList";

export default function SideBar() {
  return (
    <div
      id="sideBar"
      className="bg-[#121214] h-screen w-[375px] flex justify-between"
    >
      <ServerList />
      <ConversationPanel />
    </div>
  );
}
