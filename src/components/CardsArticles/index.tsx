
interface CardProps {
    nameCard: string,
    workCard: string,
    description: string,
    icon: string,

}

export default function CardArticles({ icon, nameCard, workCard, description }: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full rounded-md">
                <img className="w-full rounded-t-md" src={icon} alt="icone" />
            </div>
            <div className="bg-white rounded-b-md p-8 gap-2 flex flex-col justify-start">
                <p className=" text-zinc-500">
                    {nameCard}
                </p>
                <p className=" text-zinc-700 text-xl">
                    {workCard}
                </p>
                <p className=" text-zinc-500">
                    {description}
                </p>
            </div>
        </div>
    )
}