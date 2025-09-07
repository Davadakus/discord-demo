import { useState } from "react";
import ServerIcon from "../atoms/ServerIcon";
import serversList from "../data/servers.json";

export default function ServerList() {
  const [Selected, setSelected] = useState<string | null>(null);
  
  return (
    <div
      id="serverList"
      className="bg-[#121214] h-full w-[72px] flex flex-col gap-2 items-center"
    >
      <ServerIcon name="Direct messages" />
      <span className="span_server"> </span>
      {serversList.map((s) => (
        <ServerIcon key={s.serverId} name={s.serverName} />
      ))}
      
      
    </div>
  );
}
