import MainPanel from "../templates/MainPanel";
import SideBar from "../templates/SideBar";
import { useState } from "react";

function MainMenu() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <div className="flex w-screen h-[32px] bg-[#121214] text-white justify-center items-center">
        Friends
      </div>
      <div className="bg-neutral-800 h-screen w-screen flex flex-row">
        <SideBar selected={selected} setSelected={setSelected} />
        <MainPanel selected={selected} />
      </div>
    </div>
  );
}

export default MainMenu;
