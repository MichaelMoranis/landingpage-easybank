import logo from "../../assets/images/logo.svg"
import menu from "../../assets/images/icon-hamburger.svg"
import Button from "../Button"

export default function Header() {
    return (
        <section className="flex items-center w-full md:w-4/5 justify-between gap-40 md:gap-16 p-2 m-2">
            <div className="h-10 p-2">
                <img className="h-6" src={logo} alt="logo" />
            </div>
            <ul className="hidden justify-center gap-2 h-10 p-2 md:flex text-zinc-400">
                <li className=" font-bold text-xl">About</li>
                <li className=" font-bold text-xl">Contact</li>
                <li className=" font-bold text-xl">Blog</li>
                <li className=" font-bold text-xl">Careers</li>
            </ul>
            <div className="h-10 w-10 p-2 md:hidden">
                <img className="h-5 w-8" src={menu} alt="menu" />
            </div>
            <div className="hidden md:block">
                <Button />
            </div>
        </section>
    )
}