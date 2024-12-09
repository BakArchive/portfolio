import { Metadata } from "next";
import Carousel from "../components/Carousel";

export const metadata: Metadata = {
    title: "About | Portfolio",
    description: "About page of my portfolio"
}

export default function About() {
    return <Carousel />
}