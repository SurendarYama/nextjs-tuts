import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "About Us Page",
};

export default function AboutPage() {
    return (<h1 className={"heading"}>About us</h1>);
}