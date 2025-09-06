import SideBar from "../organisms/SideBar";
import ServerIcon from "../atoms/ServerIcon";
import UserDM from "../atoms/UserDM";

function MainMenu() {
  return (
    <div>
      <div className="flex w-screen h-[32px] bg-[#121214] text-white justify-center items-center">
        Friends
      </div>
      <div className="bg-neutral-800 h-screen w-screen flex flex-row gap-5">
        <SideBar />
        <div className="bg-blue-400 h-screen flex-1"></div>
      </div>
    </div>
  );
}

export default MainMenu;
