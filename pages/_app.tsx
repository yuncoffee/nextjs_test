import Layout from "../components/Layout"

import "../styles/globals.css"

type AppType = {
    Component: any
    pageProps: any
}

function App({ Component, pageProps }: AppType) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default App
