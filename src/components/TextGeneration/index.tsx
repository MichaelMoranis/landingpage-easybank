import Button from "../Button";

export default function TextGeneration() {
    return (
        <section className="flex flex-col items-center justify-center m-6 p-2 gap-4">
            <div className="mb-8">
                <h3 className="text-4xl text-zinc-700 text-center">Next Generation digital banking</h3>
            </div>
            <div className="text-zinc-500 text-center">
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </div>
            <Button />
        </section>
    )
}