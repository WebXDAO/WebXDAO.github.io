import Image from "next/image";
import Link from "next/link";
import CallToActionHero from "./CallToActionHero";
import ContributeButton from "./ContributeButton";
import DiscordButton from "./DiscordButton";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <section className="h-full">
          <div className="h-full bg-transparent pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-16">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
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
                          <div className="mb-6 flex w-full flex-col gap-4 sm:mt-0 md:flex-row md:items-center md:justify-center lg:items-start lg:justify-start">
                            <DiscordButton></DiscordButton>
                            <ContributeButton></ContributeButton>
                          </div>
                        </div>
                        <CallToActionHero></CallToActionHero>
                        <p className="mt-3 text-sm text-white/70 sm:mt-4">
                          We are an opensource community working around the future of the web. Learn
                          blockchain technology together. The community is powered by{" "}
                          <Link href="https://devprotocol.xyz/" className="font-medium text-white">
                            Dev Protocol
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <Image
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/shapes/12.png"
                      width={400}
                      height={250}
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
