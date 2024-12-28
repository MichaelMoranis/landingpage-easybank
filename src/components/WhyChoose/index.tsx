import Card from "../Card";
import MyBudget from "../../assets/images/icon-budgeting.svg"
import Api from "../../assets/images/icon-api.svg"
import Onboarding from "../../assets/images/icon-onboarding.svg"
import Online from "../../assets/images/icon-online.svg"


export default function WhyChoose() {
    return (
        <section className="flex flex-col gap-4 items-center justify-center md:justify-start md:items-start bg-zinc-100 md:w-4/5 p-16 rounded-md">
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl text-zinc-600">
                        Why Choose EasyBank?
                    </h3>
                    <p className="text-zinc-500 w-80">Lorem ipsum dolor sit ametenda consequatur libero, adipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. Nulla rerum nihil tenetur?</p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-center">
                    <Card title="Online Banking" text="ipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={MyBudget} />
                    <Card title="Simple Budgeting" text="ipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={Api} />
                    <Card title="Fast Onboarding" text="ipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={Onboarding} />
                    <Card title="Open Api" text="texipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={Online} />
                </div>
        </section>
    )
}