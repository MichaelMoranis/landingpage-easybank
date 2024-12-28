import CardArticles from "../CardsArticles";
import imgMoney from "../../assets/images/image-currency.jpg"
import plane from "../../assets/images/image-plane.jpg"
import restaurant from "../../assets/images/image-restaurant.jpg"
import confet from "../../assets/images/image-confetti.jpg"

export default function Articles() {
    return (
        <section className="flex flex-col gap-2 items-center w-full bg-zinc-200">
            <div className="flex flex-col text-center m-4 gap-4">
                <h3 className="text-3xl text-zinc-600">
                    Latest Articles
                </h3>
                <p className="text-zinc-500 text-center">Lorem ipsum dolor sit ametenda consequatur libero, adipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. Nulla rerum nihil tenetur?</p>
            </div>
            <CardArticles
                icon={imgMoney}
                nameCard="by Claire Robson"
                workCard="Receive money in any currency with no fees"
                description="repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. "
            />
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
        </section>
    )
}