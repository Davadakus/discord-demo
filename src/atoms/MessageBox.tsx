import Icon from "./Icon";

interface MessageBoxProps{
    username: string;
    children: React.ReactNode;
}

export default function MessageBox({ username, children }: MessageBoxProps){
    return(
        <div className= "flex flex-row hover:bg-neutral-800 p-2">
            <div className="w-[30px] mr-2">
               <Icon source = "avatar.png" />
            </div>
            <div className="pl-2">
                {username}
                {children}
            </div>
        </div>

    )
}