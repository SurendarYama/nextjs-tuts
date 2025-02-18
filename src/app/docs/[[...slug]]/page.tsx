export default async function DocsPage({params}:{params:Promise<{slug:string[]}>}){
    const {slug} = await params;

    if(slug?.length === 2){
        return (
            <>
                docs for feature {slug[0]} and concept {slug[1]}.
            </>
        )
    } else if(slug?.length === 1){
        return (
            <>
                docs for feature {slug[0]}.
            </>
        )
    }
    return (
        <>
            <h1 className="heading">Docs Page</h1>
        </>
    )
}