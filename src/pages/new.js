import Head from 'next/head';
import Hero from '../components/Home/Hero';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebXDAO - Opensource Community</title>
      </Head>
      <Hero />
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
