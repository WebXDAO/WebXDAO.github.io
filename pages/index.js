import Head from 'next/head'
import { Blogs } from '../components/Global'
import { DeveloperPaths, DevprotocolBrands, Hero, Projects, Testimonials } from '../components/Home'

export default function Home({ articles }) {
    return (
        <div className=''>
            <Head>
                <title>WebXDAO</title>
            </Head>
            <Hero />
            <Projects />
            <DeveloperPaths />
            <Blogs articles={articles} show={3} />
            <DevprotocolBrands />
            <Testimonials />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://dev.to/api/articles?username=web3community', {
        method: 'GET'
    })
    const articles = await res.json()
    return {
        props: {
            articles
        },
        revalidate: 10
    }
}
