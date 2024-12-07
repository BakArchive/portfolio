import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 Not Found",
    description: "The page does not exist."
}

export default function NotFound() {
    return (
        <p>Not found</p>
    )
}
