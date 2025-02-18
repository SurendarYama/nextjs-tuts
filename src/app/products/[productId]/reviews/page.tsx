export default async function ReviewsPage({params}:{params:Promise<{productId:string}>}) {
    const {productId} = (await params)
    return (
        <>
            <h1 className="heading">Product {productId} reviews</h1>
        </>
    )
}