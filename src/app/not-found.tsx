export default function NotFound(){
    return (
        <div className={"flex flex-col items-center justify-center min-h-screen"}>
            <h2 className={"text-3xl text-red-500 font-bold"}>Page not found</h2>
            <p className={"text-xl font-semibold"} >Could not find requested resource</p>
        </div>
    )
}