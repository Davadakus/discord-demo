import ServerIcon from "../atoms/ServerIcon";

export default function ServerList() {
  return (
    <div
      id="serverList"
      className="bg-red-300 h-screen w-[72px] flex flex-col gap-2 items-center"
    >
      <ServerIcon />
      <span> </span> {/** Add spacing with line here is good idea */}
      <ServerIcon />
      <ServerIcon />
    </div>
  );
}
