import Button from "../Button";

export default function Banner() {
    return (
        <section className="flex flex-col w-full h-full items-center justify-center md:w-4/5 gap-8 md:flex-row-reverse  from-green-500 from-10% via-emerald-500 via-30% to-sky-500 to-90%">
            <div className="w-full h-4/5 mt-6">
                <div className=" bg-[url('././assets/images/image-mockups.png')] bg-cover h-96">
                </div>
            </div>
            <section className="flex flex-col items-center justify-center p-2 gap-4 w-full h-4/5">
                <div className="mb-8">
                    <h3 className="text-4xl text-zinc-600 text-center font-semibold">Next Generation digital banking</h3>
                </div>
                <div className="text-zinc-600 text-center ">
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </div>
                <Button />
            </section>
        </section>
    )
}