import CallToActionHero from "./CallToActionHero";
import DiscordButton from "./DiscordButton";
import ContributeButton from "./ContributeButton";
import Image from "next/image";

/**
 * hint: use h-screen to make a fullscreen hero banner
 */
const Hero2 = () => {
  return (
    <>
      <section className="h-full bg-transparent">
        <div className="flex flex-row w-full max-w-screen-xl px-8 mx-auto py-36 lg:h-full lg:items-center">
          {/* 1 */}
          <div className="w-full text-center text-white md:text-left">
            <h1 className="text-6xl font-bold sm:text-7xl">
              Build with us,{" "}
              <span className="sm:block">the future of web.</span>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white/50">
              We focus on building and talking about possible future usage of
              web technologies.
            </p>

            <div className="flex flex-wrap items-center justify-center w-full gap-4 mt-8 text-center md:justify-start">
              <CallToActionHero></CallToActionHero>
              <DiscordButton></DiscordButton>
              <ContributeButton></ContributeButton>
            </div>
          </div>
          {/* 2 */}
          <div className="items-center justify-center w-full text-center text-white md:text-left">
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
