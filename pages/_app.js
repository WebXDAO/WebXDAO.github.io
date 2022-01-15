import { Footer, Navbar } from '../components/Global'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
