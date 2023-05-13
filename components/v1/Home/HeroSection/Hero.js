import CallToActionHero from "./CallToActionHero";
import DiscordButton from "./DiscordButton";
import ContributeButton from "./ContributeButton";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <section className="h-full">
          <div className="h-full pt-10 bg-transparent sm:pt-16 lg:overflow-hidden lg:pt-16 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="max-w-md px-4 mx-auto text-center sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
                      <span className="block">Build with us,</span>
                      <span className="block text-white">the future of web.</span>
                    </h1>
                    <p className="mt-3 text-base text-white/70 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      We focus on building and talking about possible future usage of web
                      technologies.
                    </p>
                    <div className="mt-8 sm:mt-6">
                      <div className="sm:mx-auto sm:max-w-7xl">
                        <div className="sm:flex">
                          <div className="flex flex-col md:items-center md:justify-center lg:items-start lg:justify-start w-full mb-6 sm:mt-0 md:flex-row gap-x-4 gap-y-4">
                            <DiscordButton></DiscordButton>
                            <ContributeButton></ContributeButton>
                          </div>
                        </div>
                        <CallToActionHero></CallToActionHero>
                        <p className="mt-3 text-sm text-white/70 sm:mt-4">
                          We are an opensource community working around the future of the web. Learn
                          blockchain technology together. The community is powered by{" "}
                          <Link href="https://devprotocol.xyz/">
                            <a className="font-medium text-white">Dev Protocol</a>
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/shapes/12.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
