import Head from "next/head";
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
        <div className="container max-w-5xl mx-auto">
          <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-white">
            Blogs
          </h1>
          <div className="w-full mb-4">
            <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
          </div>
        </div>

        <div className="absolute top-40 -left-16 xl:w-96 xl:h-96 bg-gradient-to-t from-[#1BFFFF] to-[#2E3192] rounded-full"></div>
        <div className="absolute top-96 -right-80 xl:w-[50rem] xl:h-[50rem] bg-gradient-to-t from-[#FBB03B] to-[#D4145A] rounded-full"></div>

        <section>
          <div className="relative flex grid flex-wrap items-center justify-center grid-cols-1 mx-0 sm:grid-cols-2 z-2 my-7">
            {data.map((curElem) => {
              return (
                <div
                  className="relative flex items-center m-10 bg-white shadow-2xl grid-items group z-2 w-min h-min bg-opacity-5 rounded-2xl justify-conten backdrop-filter backdrop-blur-md"
                  key={curElem.id}
                >
                  <div className="relative w-[17.5rem] sm:w-[15.5rem] md:w-[19rem] lg:w-[27rem] xl:w-[35rem] h-80 flex justify-center items-center flex-col opacity-70  hover:opacity-100">
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
                        <spam className="text-xs font-light lowercase">
                          {curElem.description}
                        </spam>
                        <a
                          href={curElem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pl-4 pr-4 m-auto mt-0 mb-0 text-base font-normal bg-green-500 rounded-md"
                        >
                          <b>Read</b>
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

export default Blog;
