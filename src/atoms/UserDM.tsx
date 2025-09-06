
interface UserDMProps {
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function UserDM({ name, selected = false, onClick }: UserDMProps) {
  return (
    <div className={`user_dm bg-[#121214] ${ selected ? "hover:bg-stone-900 active:bg-stone-800 bg-stone-800" : "hover:bg-stone-900 active:bg-stone-800" }`} onClick={onClick}>
      <div>
        
      </div>
      {name}
    </div>
  );
}
