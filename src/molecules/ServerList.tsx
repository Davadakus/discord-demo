import { useState } from "react";
import ServerIcon from "../atoms/ServerIcon";
import serversList from "../servers.json";

export default function ServerList() {
  const [Selected, setSelected] = useState<string | null>(null);
  
  return (
    <div
      id="serverList"
      className="bg-[#121214] h-screen w-[72px] flex flex-col gap-2 items-center"
    >
      <ServerIcon name="Direct messages" />
      <span className="span_server"> </span>
      {serversList.map((server) => (
        <ServerIcon key={server.id} name={server.ServerName} />
      ))}
      
      
    </div>
  );
}
