import Card from "../Card";
import MyBudget from "../../assets/images/icon-budgeting.svg"
import Api from "../../assets/images/icon-api.svg"
import Onboarding from "../../assets/images/icon-onboarding.svg"
import Online from "../../assets/images/icon-online.svg"


export default function WhyChoose() {
    return (
        <section className="flex flex-col gap-2 items-center w-full bg-zinc-100">
            <div className="flex flex-col text-center m-4 gap-4">
                <h3 className="text-3xl text-zinc-600">
                    Why Choose EasyBank?
                </h3>
                <p className="text-zinc-500 text-center">Lorem ipsum dolor sit ametenda consequatur libero, adipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe. Nulla rerum nihil tenetur?</p>
            </div>
            <Card title="Online Banking" text="ipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={MyBudget} />
            <Card title="Simple Budgeting" text="ipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={Api} />
            <Card title="Fast Onboarding" text="ipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={Onboarding} />
            <Card title="Open Api" text="texipisci, repellendus error quis ducimus cum non dicta sunt autem ipsam nihil saepe" icon={Online} />
        </section>
    )
}