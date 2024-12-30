import logo from "../../assets/images/logo.svg"
import menu from "../../assets/images/icon-hamburger.svg"
import iconclose from "../../assets/images/icon-close.svg"
import Button from "../Button"

type HeaderProps = {
    onMenuClick: () => void;
    sidebarOpen: boolean;
  };

export default function Header({ sidebarOpen, onMenuClick }: HeaderProps) {

    return (
        <section className="flex items-center w-full md:w-4/5 justify-between gap-40 md:gap-16 p-2">
            <div className="h-10 p-2">
                <img className="h-6" src={logo} alt="logo"  />
            </div>
            <ul className="hidden justify-center gap-2 h-10 p-2 md:flex text-zinc-400">
                <li className=" font-bold text-xl hover:text-emerald-400">About</li>
                <li className=" font-bold text-xl hover:text-emerald-400">Contact</li>
                <li className=" font-bold text-xl hover:text-emerald-400">Blog</li>
                <li className=" font-bold text-xl hover:text-emerald-400">Careers</li>
            </ul>
            <div className="h-10 w-10 p-2 md:hidden">
                <img 
                className="h-5 w-8" 
                src={sidebarOpen ? iconclose : menu } alt="menu"  
                onClick={onMenuClick}/>
            </div>
            <div className="hidden md:block">
                <Button />
            </div>
        </section>
    )
}