"use client";
import {usePathname} from "next/navigation";
export default function NotFound(){

    const pathname = usePathname();
    console.log(pathname);
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];

    console.log(productId, reviewId);
    return (
        <>
            <h2>Review {reviewId} not found for products {productId}</h2>
        </>
    )
}