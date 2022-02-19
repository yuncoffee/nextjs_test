import { useRouter } from "next/router"
import React from "react"
import Seo from "../../components/Seo"

function Detail({ params }: any) {
    const router = useRouter()

    const [title, id]: any = params || []

    console.log(router)
    return (
        <div>
            <Seo title={title} />
            <h4>{title || "Loading..."}</h4>
        </div>
    )
}

// serverSideRendering 만들기?
export async function getServerSideProps({ params: { params } }: any) {
    return {
        props: { params },
    }
}

export default Detail
