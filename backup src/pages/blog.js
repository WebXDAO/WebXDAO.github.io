import Head from "next/head";
import Link from "next/link";
// import { Blogs } from '../components/Global'

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?username=webxdao");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const Blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog | WebXDAO</title>
      </Head>
      <section className="py-8">
        <div className="container mx-auto max-w-5xl">
          <h1 className="my-2 w-full text-center text-4xl font-bold leading-tight text-white">
            Blogs
          </h1>
        </div>

        <section>
          <div className="z-2 relative mx-0 my-7 flex grid-cols-1 flex-wrap items-center justify-center">
            {data.map((curElem) => {
              return (
                <div
                  className="grid-items z-2 justify-conten group relative m-7 flex h-min w-min items-center rounded-2xl bg-white bg-opacity-5 shadow-2xl backdrop-blur-md backdrop-filter"
                  key={curElem.id}
                >
                  <div className="relative flex h-80 w-[17.5rem] flex-col items-center justify-center opacity-70 hover:opacity-100 sm:w-[15.5rem] md:w-[19rem]  lg:w-[27rem]">
                    <div className="relative w-4/5 truncate rounded-2xl border-8 border-solid border-black/25 duration-500 group-hover:-translate-y-6">
                      <img
                        src={curElem.cover_image}
                        alt="blog image"
                        className="relative left-0 top-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative mx-0 my-0 flex-wrap items-center justify-center text-center">
                      <h3 className="mb-2.5 ml-2.5 mr-2.5 mt-5 text-center text-sm font-medium uppercase leading-4 tracking-wider text-white duration-500 group-hover:-translate-y-6">
                        <b>{curElem.title}</b>
                        <br></br>
                        <br></br>
                        <spam className="text-xs font-light lowercase">{curElem.description}</spam>
                        <br></br>
                        <br></br>
                        <Link
                          href={curElem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-md border border-transparent bg-green-500 px-8 py-3 text-center font-medium text-white"
                        >
                          <b>Read More</b>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Blog;
