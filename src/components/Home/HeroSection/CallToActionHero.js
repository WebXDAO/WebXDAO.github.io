import Link from 'next/link';
import { VscGithub } from 'react-icons/vsc';

const CallToActionHero = () => {
  return (
    <div class="pb-8 flex">
      <div class="grid gap-8 items-start justify-center">
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span class="flex items-center space-x-5">
              <VscGithub className="h-6 w-6 text-cyber-webx hover:text-pink-600 hover:-rotate-6" />
              <span class="pr-6 text-gray-100 text-sm md:text-base">
                Ready for Hacktoberfest 2022
              </span>
            </span>
            <Link href="https://github.com/WebXDAO">
              <span class="pl-6 text-white/50 group-hover:text-gray-100 transition duration-200 text-sm md:text-base">
                See GitHub org &rarr;
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionHero;
