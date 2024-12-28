import logo from "../../assets/images/logo.svg"
import menu from "../../assets/images/icon-hamburger.svg"

export default function Header() {
    return (
        <section className="flex gap-40 items-center m-6 text-red-400">
            <div className="h-10">
                <img className="h-6" src={logo} alt="logo" />
            </div>
            <div className="h-10 w-10">
                <img className="h-5 w-8"  src={menu} alt="menu" />
            </div>
        </section>
    )
}