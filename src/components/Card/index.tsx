
interface CardProps {
    title: string,
    icon: string,
    text: string
}

export default function Card({ title, icon, text }: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center m-4 p-4 gap-4">
            <div>
                <img src={icon} alt="icone" />
            </div>
            <div>
                <h3 className="text-2xl">{title}</h3>
            </div>
            <div>
                <p className="text-center text-zinc-500">
                    {text}
                </p>
            </div>
        </div>
    )
}