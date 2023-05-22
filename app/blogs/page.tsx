import Head from "next/head";
import Image from "next/image";
// import { Blogs } from '../components/Global'


async function getData() {
  const res = await fetch('https://dev.to/api/articles?username=webxdao');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function BlogPage({
  params: { data },
}:{
  params: { data: [] };
}) {
  // Initiate dev.to API request
  const blogData = getData();

  // Wait for the promises to resolve
  const [dataT] = await Promise.all([blogData]);

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

            {dataT.map((curElem: any) => {
              return (
                <div
                  className="grid-items z-2 justify-conten group relative m-7 flex h-min w-min items-center rounded-2xl bg-white/5 shadow-2xl backdrop-blur-md"
                  key={curElem.id}
                >
                  <div className="relative flex h-80 w-[17.5rem] flex-col items-center justify-center opacity-70 hover:opacity-100 sm:w-[15.5rem] md:w-[19rem]  lg:w-[27rem]">
                    <div className="relative w-4/5 truncate rounded-2xl border-8 border-solid border-black/25 duration-500 group-hover:-translate-y-6">
                      <Image
                        src={curElem.cover_image}
                        width={400}
                        height={250}
                        alt="blog image"
                        className="relative left-0 top-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="relative m-0 flex-wrap items-center justify-center text-center">
                      <h3 className="mx-2.5 mb-2.5 mt-5 text-center text-sm font-medium uppercase leading-4 tracking-wider text-white duration-500 group-hover:-translate-y-6">
                        <b>{curElem.title}</b>
                        <br></br>
                        <br></br>
                        <span className="text-xs font-light lowercase">{curElem.description}</span>
                        <br></br>
                        <br></br>
                        <a
                          href={curElem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-md border border-transparent bg-green-500 px-8 py-3 text-center font-medium text-white"
                        >
                          <b>Read More</b>
                        </a>
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
