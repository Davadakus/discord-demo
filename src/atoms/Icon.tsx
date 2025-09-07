interface IconProps {
    source: string;
}

export default function Icon( { source }: IconProps ){
    return (
        <div className="relative size-[35px] rounded-4xl overflow-hidden">
            <img
                src={source}
                draggable ="false"
                className="object-cover scale-100"
            />
        </div>
    )
}