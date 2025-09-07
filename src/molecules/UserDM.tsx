import Icon from "../atoms/Icon";
import Buttons from "../atoms/Buttons";

interface UserDMProps {
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function UserDM({ name, selected = false, onClick }: UserDMProps) {
  return (
    <Buttons selected={selected} onClick={onClick}>
      <div className="mr-3">
        <Icon source = "avatar.png" />
      </div>
      {name}
    </Buttons>
  );
}
