import Head from 'next/head';
// import { Blogs } from '../components/Global'

export default function Blog({ articles }) {
  return (
    <>
      <Head>
        <title>Blog | WebXDAO</title>
      </Head>
      {/* <section className='text-white text-center bg-[#00007F]'>
        <div className='px-20 py-20'>
          <h1 className='font-bold text-5xl antialiased'>Check out our blog posts</h1>
          <div className='mt-6 text-xl font-light text-true-gray-500 antialiased'>
            Read our articles from <span className='font-mono'>Dev.to</span>
          </div>
        </div>
        <Blogs articles={articles} contentOnly={true} />
      </section> */}
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
