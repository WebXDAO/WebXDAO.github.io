import Link from "next/link";
import { prefix } from "../../constants";
import Image from "next/image";

const DevprotocolBrands = () => {
  const projects = [
    {
      name: "Dev Protocol",
      imgUrl: "/dev_protocol.png",
      text: "Dev Protocol integrates with OSS so that projects or creators can authenticate and tokenize their work. It is a whole new creator economy evolving from open creators assets.",
      url: "https://devprotocol.xyz/",
    },
    {
      name: "Stakes.Social",
      imgUrl: "/stakes_social.png",
      text: "Stakes.social is a new sponsor platform where both developers and sponsors are rewarded with tokens if they support their favorite projects by staking $DEV tokens.",
      url: "https://stakes.social/",
    },
    {
      name: "Dev Protocol Forum",
      imgUrl: "/dev_protocol_forum.png",
      text: "Dev Protocol forum is an open conversation for everyone who can collaborate or propose ideas to the Dev Protocol team or help other community members.",
      url: "https://community.devprotocol.xyz/",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container m-8 mx-auto max-w-5xl">
        <h1 className="my-2 w-full text-center text-4xl font-bold leading-tight text-gray-800">
          Dev Protocol Brand
        </h1>
        <p className="mx-10 mb-5 px-6 text-center text-base text-gray-800">
          Our Partner Open Source Projects
        </p>
        <div className="mb-4 w-full">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
        </div>
      </div>

      <div className="container mx-auto mb-8 flex max-w-screen-xl flex-col flex-wrap px-8 pt-4 text-black">
        <div className="grid grid-cols-1 items-center gap-6 text-black md:grid-cols-3">
          {projects.map(({ name, imgUrl, text, url }, index) => (
            <Link
              key={name + index}
              href={url}
              passHref
              className="group h-full"
            >
              <div className="focus:shadow-outline mx-auto flex h-full cursor-pointer flex-col items-center justify-evenly rounded-md bg-white object-center p-8 text-center shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none">
                <div className="relative h-24 w-full shrink-0">
                  <Image
                    src={prefix + imgUrl}
                    width={400}
                    height={250}
                    alt={name}
                    className="object-contain"
                  />
                </div>
                <p className="mb-2 mt-8 h-full px-8 text-sm text-gray-800 sm:px-4">
                  {text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevprotocolBrands;
