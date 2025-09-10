import UserProfile from "../molecules/UserProfile";
import PageList from "../organisms/PageList";
import ServerList from "../organisms/ServerList";
import { SelectionProps } from "../SelectionProps";

export default function SideBar({ selected, setSelected }: SelectionProps) {
  return (
    <div 
      id="sideBar"
      className="bg-[#121214] h-full w-[375px] flex flex-col relative"
    >
      <div className="flex-row flex h-full z-1">
        <ServerList  />
        <PageList selected={selected} setSelected={setSelected} />
      </div>
      <div className="m-1 mb-2">
        <UserProfile name="James" />
      </div>
    </div>
  );
}
