import Buttons from "../atoms/Buttons";
import Icon from "../atoms/Icon";

interface UserProfileProps{
    name: string;
}

export default function UserProfile({ name }){
    return(
        <div className="border-neutral-700 rounded border z-10 p-2">
            <Buttons>
                <div className="mr-3 ">
                    <Icon source = "avatar.png" />
                </div>
                {name}
            </Buttons>
        </div>
    );
}