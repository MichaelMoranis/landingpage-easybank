import CardArticles from "../CardsArticles";
import imgMoney from "../../assets/images/image-currency.jpg"
import plane from "../../assets/images/image-plane.jpg"
import restaurant from "../../assets/images/image-restaurant.jpg"
import confet from "../../assets/images/image-confetti.jpg"

export default function Articles() {
    return (
        <section className="flex flex-col w-full gap-4 bg-zinc-100  md:w-4/5 p-4  rounded-md">
            <div className="flex flex-col m-4 gap-4">
                <h3 className="text-3xl text-zinc-600">
                    Latest Articles
                </h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <CardArticles
                    icon={plane}
                    nameCard="by Mislane Medeiros"
                    workCard="quis ducimus cum non dicta s"
                    description="repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. "
                />
                <CardArticles
                    icon={confet}
                    nameCard="by Charley Klismann"
                    workCard="quis ducimus cum non dicta s "
                    description="repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. "
                />
                <CardArticles
                    icon={restaurant}
                    nameCard="by Noe Medeiros"
                    workCard="quis ducimus cum non dicta s"
                    description="repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. "
                />
                <CardArticles
                    icon={imgMoney}
                    nameCard="by Michael Moranis"
                    workCard="quis ducimus cum non dicta s"
                    description="repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. "
                />
            </div>
        </section>
    )
}