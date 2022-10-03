import Head from 'next/head';
import { prefix } from '../constants';

export default function Projects({ projectsData }) {
  return (
    <>
      <Head>
        <title>Projects | WebXDAO</title>
      </Head>
      <section className="text-white text-center bg-[#00007f]">
        <div className="px-5 py-10 sm:p-20">
          <h1 className="font-bold text-3xl md:text-5xl antialiased">
            Resources/Projects
          </h1>
          <div className="mt-6 text-lg md:text-xl font-light text-true-gray-500 antialiased">
            Here you can find a list of good projects and resources to learn
            about Blockchain and Web 3.0
          </div>
        </div>
      </section>

      <div className="container max-w-screen-xl mx-auto my-8 grid pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-6 px-8">
        {projectsData.map(
          ({ name, imgUrl, type, title, text, tags }, index) => (
            <div
              key={name + index}
              className="flex flex-col justify-between items-stretch col-span-3 md:col-span-1 cursor-pointer p-2 shadow rounded-md focus:outline-none focus:shadow-outline transform transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out"
            >
              <div className="bg-white p-4 rounded-lg flex flex-col justify-between">
                <div className="relative mb-6">
                  <img
                    className="h-44 md:h-64 lg:h-60 xl:h-56 w-full object-cover object-center rounded-md"
                    src={prefix + imgUrl}
                    alt={name}
                  />
                </div>
                <div className="flex justify-between items-center md:items-start mb-2 md:mb-4">
                  <h2 className="text-lg md:text-xl text-gray-900 font-semibold">
                    {title}
                  </h2>
                  <h3
                    className={`tracking-widest ${type === 'FREE' ? 'text-green-500' : 'text-yellow-500'
                      } text-sm font-semibold title-font`}
                  >
                    {type}
                  </h3>
                </div>

                <p className="leading-relaxed text-sm md:text-base text-gray-800 mb-5">
                  {text}
                </p>

                <div className="mt-auto justify-items-end text-sm flex flex-wrap gap-3">
                  {tags.map((item, index) => (
                    <button
                      key={item + index}
                      className="whitespace-nowrap font-semibold bg-blue-100 text-blue-600 rounded-md py-2 px-4 focus:outline-none"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export function getStaticProps() {
  const data = [
    {
      name: 'InVision',
      imgUrl: '/blogs_inVision.png',
      type: 'PREMIUM',
      title: 'Start Here',
      text: 'InVision is the digital product design platform used to make the worlds best customer experiences.',
      tags: ['Documentation'],
    },
    {
      name: 'Adobe XD',
      imgUrl: '/blogs_xd.png',
      type: 'FREE',
      title: 'Blockchain Dev Path',
      text: 'Adobe XD is your UI/UX design solution platform for website and mobile appcreation.',
      tags: ['Documentation'],
    },
    {
      name: 'Figma',
      imgUrl: '/blogs_figma.png',
      type: 'FREE',
      title: 'Website',
      text: 'Figma helps the teams to create, test, and ship better designs from start to finish.',
      tags: ['Tailwind Css', 'Eleventy', 'Alpine.js'],
    },
  ];
  return {
    props: {
      projectsData: data,
    },
  };
}
