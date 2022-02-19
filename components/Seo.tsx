import Head from "next/head"
import React from "react"

function Seo({ title }: any) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}

export default Seo
