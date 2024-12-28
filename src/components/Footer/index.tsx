import insta from "../../assets/images/icon-instagram.svg"
import face from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import youtube from "../../assets/images/icon-youtube.svg"
import pint from "../../assets/images/icon-pinterest.svg"

import Button from "../Button"

export default function Footer() {
    return (
        <section className="bg-indigo-900 w-full flex flex-col gap-4 items-center justify-center">
            <div className="text-center mt-8 h-16 w-40">
                <h3 className="text-4xl font-bold text-zinc-100">Easybank</h3>
            </div>
            <div>
                <ul className="flex gap-8 h-10">
                    <li className="h-8 w-8"><img className="h-full w-full" src={insta} alt="icone insta" /></li>
                    <li className="h-8 w-8"><img className="h-full w-full" src={face} alt="icone face" /></li>
                    <li className="h-8 w-8"><img className="h-full w-full" src={twitter} alt="icone twitter" /></li>
                    <li className="h-8 w-8"><img className="h-full w-full" src={youtube} alt="youtube" /></li>
                    <li className="h-8 w-8"><img className="h-full w-full" src={pint} alt="pint" /></li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col items-center justify-center gap-4">
                    <li className="text-zinc-100 font-bold text-xl">About Us</li>
                    <li className="text-zinc-100 font-bold text-xl">Contact</li>
                    <li className="text-zinc-100 font-bold text-xl">Blog</li>
                    <li className="text-zinc-100 font-bold text-xl">Careers</li>
                    <li className="text-zinc-100 font-bold text-xl">Support</li>
                    <li className="text-zinc-100 font-bold text-xl">Privacy Policy</li>
                </ul>
            </div>
            <Button />
            <p className="text-zinc-400 m-4">Easybank all rights reserved</p>
        </section>
    )
}