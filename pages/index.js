import Head from 'next/head'
import { DeveloperPaths, Hero, Projects } from '../components/Home'

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>WebXDAO</title>
            </Head>
            <Hero />
            <Projects />
            <DeveloperPaths />
        </div>
    )
}
