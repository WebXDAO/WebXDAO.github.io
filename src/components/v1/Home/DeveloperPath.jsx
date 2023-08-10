import Image from "next/image";
import { prefix } from "../../constants";
import Link from "next/link";

const DeveloperPath = () => {
  const devPaths = [
    {
      name: "Simplilearn",
      imgUrl: "/simplilearn.png",
      text: "Blockchain tutorial for beginners to advanced Level.",
      url: "https://www.simplilearn.com/tutorials/blockchain-tutorial?source=sl_frs_nav_playlist_video_clicked",
    },
    {
      name: "Learn with Whiteboard",
      imgUrl: "/whiteboard.png",
      text: "The skills required for a blockchain developer which is one of the in-demand professions today.",
      url: "https://www.youtube.com/watch?v=x9l3y0cdpuU",
    },
    {
      name: "Figment",
      imgUrl: "/figment.png",
      text: "The Web 3 education platform for developers, by developers.Learn the Web 3 basics with 101 Pathways.",
      url: "https://learn.figment.io/",
    },

    {
      name: "CryptoZombies",
      imgUrl: "/cryptozombie.png",
      text: "CryptoZombies is an interactive school that teaches you all things technical about blockchains.",
      url: "https://cryptozombies.io/",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto max-w-7xl pt-8">
        <h1 className="my-2 w-full text-center text-4xl font-bold leading-tight text-gray-800">
          Blockchain Developer Path
        </h1>
        <p className="mx-10 mb-5 px-6 text-center text-base text-gray-800">
          The latest field in the tech industry
        </p>
        <div className="mb-4 w-full">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
        </div>

        <div className="grid-col-1 grid gap-y-3 p-3 text-black md:grid md:grid-cols-2 md:gap-3 md:p-3">
          {devPaths.map(({ name, imgUrl, text, url }, index) => (
            <div
              key={name + index}
              className="focus:shadow-outline flex-1 rounded-md bg-white p-4 shadow transition duration-300 ease-in-out hover:z-20 hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              <div className="flex items-center justify-start overflow-hidden">
                <div className="relative w-1/3 bg-contain">
                  <Image
                    src={prefix + imgUrl}
                    width={400}
                    height={250}
                    alt={name}
                    className="rounded-md bg-gray-50 p-5"
                  />
                </div>
                <div id="body" className="flex flex-col gap-y-3 pl-5">
                  <h4 id="name" className="text-xl font-semibold">
                    {name}
                  </h4>
                  <p id="caption" className="text-gray-800">
                    {text}
                  </p>
                  <div id="label" className="flex gap-x-3 text-sm">
                    <Link href={url}>
                      <button className="cursor-pointer rounded-md bg-blue-100 px-4  py-2 font-semibold text-blue-600 focus:outline-none">
                        Take me there!
                      </button>
                    </Link>
                    <button className="rounded-md bg-blue-100 px-4 py-2 font-semibold text-blue-600 focus:outline-none">
                      Development
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center py-5">
          <Link
            href="https://github.com/WebXDAO/blockchain-dev-path"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:scale-85 rounded-md bg-gray-700 px-8 py-2 text-white shadow transition duration-300 ease-in-out hover:shadow-lg">
              See All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeveloperPath;
