import React from "react"
import Navbar from "./Navbar"

function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}

export default Layout
