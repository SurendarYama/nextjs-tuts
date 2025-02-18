export default async function ProductReviewsPage({params}:{params:Promise<{productId:string,reviewId:string}>}){
    const {productId,reviewId} = (await params);

    return (
        <>
            <h1 className="heading">Product {productId} Review{reviewId}</h1>
        </>
    )
}