import Head from 'next/head';
import Content from '../components/Content';
import Hero from '../components/Home/HeroSection/Hero';
import Hero2 from '../components/Home/HeroSection/Hero2';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebXDAO - Opensource Community</title>
      </Head>
      <div className="flex flex-col h-full">
        {/* <Hero /> */}
        <Hero2 />
        {/* <Content></Content> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=webxdao', {
    method: 'GET',
  });
  const articles = await res.json();
  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
}
