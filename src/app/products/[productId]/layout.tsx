import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Product Item Page",
    description: "Product Item Page Page",
}

export default function ProductLayout({children}:{children:React.ReactNode}) {
    return (
        <>
            {children}
            <h2>extra layout</h2>
        </>
    )
}