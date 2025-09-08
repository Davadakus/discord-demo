import MainPanel from "../templates/MainPanel";
import SideBar from "../templates/SideBar";
import { useState } from "react";

function MainMenu() {
  const [selected, setSelected] = useState<number | null>(null);

  // remember to put everything in container
  return (
    <div className="flex flex-col h-screen"> 
      <div className="flex w-full h-[32px] bg-[#121214] text-white justify-center items-center">
        Friends
      </div>
      <div className="bg-neutral-800 flex-1 w-full flex flex-row">
        <SideBar selected={selected} setSelected={setSelected} />
        <MainPanel selected={selected} />
      </div>
    </div>
  );
}

export default MainMenu;
