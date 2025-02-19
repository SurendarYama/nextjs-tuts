import type {Metadata} from "next";

type Props = {
    params:Promise<{productId:string}>
}

export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {
    const {productId} = await params;
    return {
        title: `Product item ${productId}`,
    }
}

export default async function ProductItemDetailPage({params}:Props){

    const {productId} = (await params);
    return (
        <>
            <h1 className="heading">Product Item {productId} Details Pages</h1>
        </>
    )
}