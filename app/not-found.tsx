import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 Not Found",
    description: "The page does not exist"
}

export default function NotFound() {
    return (
        <div className="h-full flex flex-col gap-4 justify-center md:items-center">
            <h1 className="text-6xl">Not Found</h1>
            <h2 className="text-4xl">The page does not exist</h2>
        </div>
    )
}
