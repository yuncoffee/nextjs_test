import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

function NavbarJsx() {
    const router = useRouter()

    return (
        <>
            <nav>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>
                        집으로!
                    </a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>
                        집으로!
                    </a>
                </Link>
            </nav>
            <style jsx>
                {`
                    nav {
                        background: green;
                    }
                    a {
                        text-decoration: none;
                        color: white;
                    }
                    .active {
                        color: yellow;
                    }
                `}
            </style>
        </>
    )
}

export default NavbarJsx
