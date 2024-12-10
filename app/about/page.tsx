import { Metadata } from "next";
import ScrollContainer from "../components/ScrollContainer";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "About page of my portfolio",
};

export default function About() {
  return (
    <>
      <ScrollContainer />
    </>
  );
}
