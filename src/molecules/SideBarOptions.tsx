import Icon from "../atoms/Icon";
import Buttons from "../atoms/Buttons";

interface SideBarOptionsProps {
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function SideBarOptions({ name, selected = false, onClick }: SideBarOptionsProps) {
  return (
    <Buttons selected={selected} onClick={onClick}>
      <div>
        <Icon source="person.png"/>
      </div>
      {name}
    </Buttons>
  );
}
