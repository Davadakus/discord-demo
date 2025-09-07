interface ButtonsProp {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Buttons({ selected = false, onClick, children }: ButtonsProp) {
  return (
    <div className={`button bg-[#121214] ${ selected ? "hover:bg-stone-900 active:bg-stone-800 bg-stone-800" : "hover:bg-stone-900 active:bg-stone-800" }`} onClick={onClick}>
      {children}
    </div>
  );
}
