
interface CardProps {
    title: string,
    icon: string,
    text: string
}

export default function Card({ title, icon, text }: CardProps) {
    return (
        <div className="flex flex-col items-center gap-6 p-2 md:items-start md:gap-2">
            <div>
                <img src={icon} alt="icone" />
            </div>
            <div>
                <h3 className="text-2xl md:text-sm">{title}</h3>
            </div>
            <div>
                <p className="text-center md:text-start text-zinc-500">
                    {text}
                </p>
            </div>
        </div>
    )
}