import { VscGithub } from "react-icons/vsc";
import Link from "next/link";

const CallToActionHero = () => {
  return (
    <div className="flex pb-2">
      <div className="grid w-full items-start gap-8">
        <div className="group relative">
          <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-fuchsia-700 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <button className="relative flex w-full items-center divide-x divide-gray-600 rounded-lg bg-black/80 px-7 py-4 leading-none ">
            <span className="flex items-center space-x-5 ">
              <VscGithub className="text-cyber-webx h-6 w-6 hover:-rotate-6 hover:text-pink-600" />
              <Link href="https://hacktoberfest.com">
                <span className="pr-6 text-sm text-gray-100 md:text-base">
                  Hacktoberfest 2022
                </span>
              </Link>
            </span>
            <Link href="https://github.com/WebXDAO">
              <span className="pl-6 text-sm text-white/50 transition duration-200 group-hover:text-gray-100 md:text-base">
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
