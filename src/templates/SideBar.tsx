import PageList from "../organisms/PageList";
import ServerList from "../organisms/ServerList";
import { SelectionProps } from "../SelectionProps";

export default function SideBar({ selected, setSelected }: SelectionProps) {
  return (
    <div
      id="sideBar"
      className="bg-[#121214] h-full w-[375px] flex justify-between"
    >
      <ServerList  />
      <PageList selected={selected} setSelected={setSelected} />
    </div>
  );
}
