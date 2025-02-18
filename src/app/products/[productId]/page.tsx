export default async function ProductItemDetailPage({params}:{params:Promise<{productId:string}>}){

    const {productId} = (await params);
    return (
        <>
            <h1 className="heading">Product Item {productId} Details Pages</h1>
        </>
    )
}