import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

const CallToActionHero = () => {
  return (
    <div className="pb-2 flex">
      <div className="w-full grid gap-8 items-start">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-fuchsia-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="w-full relative px-7 py-4 bg-black/80 rounded-lg leading-none flex items-center divide-x divide-gray-600 ">
            <span className="flex items-center space-x-5 ">
              <VscGithub className="w-6 h-6 text-cyber-webx hover:text-pink-600 hover:-rotate-6" />
              <Link href="https://hacktoberfest.com">
                <span className="pr-6 text-gray-100 text-sm md:text-base">
                  Hacktoberfest 2022
                </span>
              </Link>
            </span>
            <Link href="https://github.com/WebXDAO">
              <span className="pl-6 text-white/50 group-hover:text-gray-100 transition duration-200 text-sm md:text-base">
                See GitHub organization &rarr;
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionHero;
