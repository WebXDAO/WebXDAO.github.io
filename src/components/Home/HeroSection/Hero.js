import { motion } from 'framer-motion';
import CallToActionHero from './CallToActionHero';
import DiscordButton from './DiscordButton';
import ContributeButton from './ContributeButton';
import Image from 'next/image';

/**
 * hint: use h-screen to make a fullscreen hero banner
 */
const Hero = () => {
  return (
    <>
      <section className="bg-transparent h-full">
        <div className="px-8 py-36 mx-auto max-w-screen-xl lg:h-full lg:items-center flex flex-row w-full">
          {/* 1 */}
          <div className="w-full text-white text-center md:text-left">
            <h1 className="text-6xl font-bold sm:text-7xl">
              Build with us,{' '}
              <span className="sm:block">the future of web.</span>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white/50">
              We focus on building and talking about possible future usage of
              web technologies.
            </p>

            <div className="flex flex-wrap mt-8 text-center items-center justify-center md:justify-start gap-4 w-full">
              <CallToActionHero></CallToActionHero>
              <DiscordButton></DiscordButton>
              <ContributeButton></ContributeButton>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full text-white text-center md:text-left justify-center items-center">
            <Image
              src="/images/shapes/1.png"
              alt="WebXDAO logo"
              layout=""
              width={750}
              height={750}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
