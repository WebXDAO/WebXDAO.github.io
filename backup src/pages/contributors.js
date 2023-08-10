import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/repos/WebXDAO/webXDAO.github.io/contributors");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const contributors = ({ data }) => {
  return (
    <>
      <Head>
        <title>Contributors | WebXDAO</title>
      </Head>
      <section className="mx-auto max-w-7xl">
        <div className="container mx-auto max-w-5xl">
          <h1 className="my-2 w-full text-center text-4xl font-bold leading-tight text-white">
            Contributors
          </h1>
        </div>
        <div className="z-1 relative mx-0 my-[40px] flex flex-wrap items-center justify-between">
          {data.map((curElem) => {
            return (
              <div
                className="group relative mx-auto my-5 flex h-64 w-48 items-center justify-center rounded-2xl bg-white bg-opacity-5 shadow-2xl backdrop-blur-md backdrop-filter"
                key={curElem.login}
              >
                <div className="relative flex flex-col items-center justify-center opacity-70 hover:opacity-100">
                  <div className="relative h-40 w-40 overflow-hidden truncate rounded-full border-8 border-solid border-black/25 duration-500 group-hover:-translate-y-6">
                    <Link href={curElem.html_url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={curElem.avatar_url}
                        alt="Avatar"
                        className="relative left-0 top-0 h-full w-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="relative mx-0 my-0 flex-wrap items-center justify-center text-center">
                    <Link href={curElem.html_url} target="_blank" rel="noopener noreferrer">
                      <h3 className="mb-2.5 ml-2.5 mr-2.5 mt-5 text-center text-sm font-medium uppercase leading-4 tracking-wider text-white duration-500 group-hover:-translate-y-6">
                        {curElem.login}
                      </h3>
                    </Link>
                    <h5 className="m-auto mb-0 mt-0 h-fit w-fit rounded-md bg-green-500 pl-4 pr-4 text-base font-normal duration-500 group-hover:-translate-y-6">
                      {curElem.contributions}
                      <svg
                        className="inline-block h-[1em] w-[1.25em] overflow-visible align-[-0.125em] lowercase"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="hands-helping"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"
                        ></path>
                      </svg>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default contributors;
