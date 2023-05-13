import Head from "next/head";
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
        <div className="container max-w-5xl mx-auto">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-white">
            Blogs
          </h1>
        </div>

        <section>
          <div className="relative flex flex-wrap items-center justify-center grid-cols-1 mx-0 z-2 my-7">

            {dataT.map((curElem: any) => {
              return (
                <div
                  className="relative flex items-center m-7 bg-white shadow-2xl grid-items group z-2 w-min h-min bg-opacity-5 rounded-2xl justify-conten backdrop-filter backdrop-blur-md"
                  key={curElem.id}
                >
                  <div className="relative w-[17.5rem] sm:w-[15.5rem] md:w-[19rem] lg:w-[27rem] h-80 flex justify-center items-center flex-col opacity-70  hover:opacity-100">
                    <div className="relative w-4/5 truncate duration-500 border-8 border-solid rounded-2xl border-black/25 group-hover:-translate-y-6">
                      <img
                        src={curElem.cover_image}
                        alt="blog image"
                        className="relative top-0 left-0 object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative flex-wrap items-center justify-center mx-0 my-0 text-center">
                      <h3 className="group-hover:-translate-y-6 duration-500 text-white uppercase font-medium text-sm text-center tracking-wider mt-5 mr-2.5 ml-2.5 mb-2.5 leading-4">
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
                          className="inline-block rounded-md border border-transparent bg-green-500 py-3 px-8 text-center font-medium text-white"
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
