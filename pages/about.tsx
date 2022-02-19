import Head from "next/head"
import React from "react"
import Seo from "../components/Seo"

// page의 이름이 url로 사용된다.
// 단 메인(index)는 index에 작성된다
// 페이지 작성 시 export default function 해줘야됨
export default function Potato() {
    return (
        <>
            <Seo title="about" />
            <Head>
                <title>Home | Next Movies</title>
            </Head>
        </>
    )
}
