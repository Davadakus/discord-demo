import { useState } from "react";

interface ServerIconProps {
  name: string;
}

export default function ServerIcon({ name }: ServerIconProps) {
  const [hover, setHover] = useState(false)
  
  return (
    <div className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="relative size-[40px] rounded-xl overflow-hidden">
        <img
          src="A.png" 
          draggable ="false"
          className="object-cover scale-125 "
        />
      </div>

      <div 
        className={`absolute bg-stone-800 text-white left-12 top-0 p-2 rounded-xl w-max max-w-[150px] break-words whitespace-normal transition-all duration-200 
          ${ hover ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
        {name ? name : "empty server name"}
      </div>

    </div>
  )
}
