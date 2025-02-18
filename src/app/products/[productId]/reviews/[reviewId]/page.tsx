import {notFound} from "next/navigation";

export default async function ProductReviewsPage({params}:{params:Promise<{productId:string,reviewId:string}>}){
    const {productId,reviewId} = (await params);
    if(parseInt(reviewId) > 1000){
        return notFound();
    }
    return (
        <>
            <h1 className="heading">Product {productId} Review{reviewId}</h1>
        </>
    )
}