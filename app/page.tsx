// 'use client'

import CursorHoverster from "@/components/cursor-hoverster";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      {/* TODO: How can i put the image in the background.. absolute / relative thingy */}

      <section className="flex flex-col items-center min-h-screen justify-center text-center relative overflow-hidden">
        <div className="flex flex-col relative z-10 gap-6">
          <div className="flex max-w-[980px] flex-col items-center gap-2 ">
            <h1 className="text-3xl font-medium leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-slate-900 mix-blend-difference">
              <span className="block">Shaping web</span>
              <span className="block">that will captivate</span>
              <span className="block">the world.</span>
            </h1>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href={siteConfig.links.webxdao_getstarted}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Get started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.webxdao_gh}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Icons.gitHub className="h-5 w-5 mr-2" />
              GitHub
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4 mt-10">
            <p className="max-w-[700px] text-lg text-slate-900 dark:text-white sm:text-xl">
              Our community is based on open-source principles and we're focused on shaping the
              future of the web. Join us as we collaborate on projects, share knowledge, and build
              community.
            </p>
          </div>
        </div>

        <div className="absolute">
          <Image
            src="/12.png"
            width={1200}
            height={1200}
            alt="logo"
            className="mix-blend-difference"
          />
        </div>

        <Image
          src="/flying-card-001.png"
          alt="flying card 001"
          width={135}
          height={165}
          className="absolute top-[12rem] left-[12rem]"
        />

        <Image
          src="/flying-card-002.png"
          alt="flying card 001"
          width={208}
          height={259}
          className="absolute bottom-[15rem] right-[12rem]"
        />
        <CursorHoverster />
      </section>

      {/* Headline */}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-center text-center mt-20">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h3 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-2xl px-32">
            Become an integral part of a dynamic and vibrant network of like-minded developers
          </h3>
          <div className="flex gap-4 gap-x-4 mt-4">
            <div className="flex items-center">
              <Icons.twitter className="h-5 w-5 mr-1 fill-current cursor-pointer" />
              <span className="cursor-pointer">Twitter</span>
            </div>

            <div className="flex items-center">
              <Icons.discord className="h-5 w-5 mr-1 fill-current cursor-pointer" />
              <span className="cursor-pointer">Discord</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blurbs */}
      <section className="flex py-0 px-40">
        <div className="flex my-12 gap-8">
          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <div className="p-8 bg-white border-l-3 border-opacity-38 shadow-md shadow-purple-300 rounded-lg border-white flex justify-center">
              <Icons.collaborate className="h-15 w-15 mr-1" />
            </div>
            <div className="font-bold text-lg">Collaborate</div>
            <span className="text-sm">
              Collaborate with other members to achieve common goals and objectives.
            </span>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <div className="p-8 bg-white border-l-3 border-opacity-38 shadow-md shadow-purple-300 rounded-lg border-white flex justify-center">
              <Icons.blockchain className="h-15 w-15 mr-1" />
            </div>
            <div className="font-bold text-lg">Blockchain</div>
            <span className="text-sm">
              Dedicated to exploring new ways to leverage the power Of this transformative
              technology.
            </span>
          </div>

          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <div className="p-8 bg-white border-l-3 border-opacity-38 shadow-md shadow-purple-300 rounded-lg border-white flex justify-center">
              <Icons.decentralization className="h-15 w-15 mr-1" />
            </div>
            <div className="font-bold text-lg">Decentralization</div>
            <span className="text-sm">
              Operates in a decentralized manner, giving power to its community members.
            </span>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-center text-center mt-20">
        <div className="flex max-w-[980px] flex-col items-center gap-2 ml-auto mr-auto">
          <h3 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-2xl px-32">
            Get to know our Community Partners
          </h3>
          <h2>Community Partners we highly value</h2>
        </div>

        <div className="flex flex-row gap-32 mt-10">
          <div className="max-w-sm overflow-hidden bg-white border-l-3 border-opacity-38 shadow-md shadow-purple-300 rounded-lg">
            <img className="w-full" src="/Dev-protocol-1.png" alt="" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                Dev Protocol is designed as a unique protocol to fairly evaluate OSS, which has been
                economically undervalued for decades. It is built on the Ethereum blockchain and
                brings economic value to all open source activities.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end">
              <span className="border-2 border-solid border-black rounded px-4 py-1 flex w-fit-content mr-auto gap-6 font-inter font-semibold text-14.0418 text-black mb-0 cursor-pointer">
                <Image
                  src="/Arrow1.png"
                  alt="arrow"
                  width={15}
                  height={18}
                  className="flex items-center mt-auto mb-auto"
                />
                Read More
              </span>
            </div>
          </div>

          <div className="max-w-sm overflow-hidden bg-white border-l-3 border-opacity-38 shadow-md shadow-purple-300 rounded-lg">
            <img className="w-full" src="/The-Algorithms-1.png" alt="" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                The Algorithms is an open source community for learning Data Structures & Algorithms
                and their implementation in any Programming Language.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end mt-10">
              <span className="border-2 border-solid border-black rounded px-4 py-1 flex w-fit-content mr-auto gap-6 font-inter font-semibold text-14.0418 text-black mb-0 cursor-pointer">
                <Image
                  src="/Arrow1.png"
                  alt="arrow"
                  width={15}
                  height={18}
                  className="flex items-center mt-auto mb-auto"
                />
                Read More
              </span>
            </div>
          </div>

          <div className="max-w-sm overflow-hidden bg-white border-l-3 border-opacity-38 shadow-md shadow-purple-300 rounded-lg">
            <img className="w-full" src="/Lumos-Labs-1.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                Lumos labs is building a metaverse for builders and Web3 ecosystem enablers to share
                opportunities to build scale-up.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end mt-12">
              <span className="border-2 border-solid border-black rounded px-4 py-1 flex w-fit-content mr-auto gap-6 font-inter font-semibold text-14.0418 text-black mb-0 cursor-pointer">
                <Image
                  src="/Arrow1.png"
                  alt="arrow"
                  width={15}
                  height={18}
                  className="flex items-center mt-auto mb-auto"
                />
                Read More
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-center text-center">
        <div className="flex max-w-[980px] flex-col items-center gap-2">

          <h3 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-2xl px-32">
            Become an integral part of a dynamic and vibrant network of like-minded developers
          </h3>
          <div className="flex gap-4">

            <div className="flex items-center">
            <Icons.twitter className="h-5 w-5 mr-1 fill-current" />
              <span className="">Twitter</span>
            </div>

            <div className="flex items-center">
              <Icons.discord className="h-5 w-5 mr-1 fill-current" />
              <span className="">Discord</span>
            </div>
          </div>
        
        </div>
      </section> */}

      {/* Blurbs: not ok.. i should not use grid */}
      {/* <section className="flex">
        
          <div className="flex my-12 gap-8">

            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
                <Icons.users className="h-5 w-5 mr-1" />
                </div>
              <div className="font-bold text-lg">
                Collaborate
              </div>
              <span className="text-sm">Collaborate with other members to achieve
                common goals and objectives.</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
              <Icons.zap className="h-5 w-5 mr-1" />


              </div>
              <div className="font-bold text-lg">
                Blockchain
              </div>
              <span className="text-sm">Dedicated to exploring new ways to leverage
                the power Of this transformative technology.</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
              <Icons.rocket className="h-5 w-5 mr-1" />
              </div>
              <div className="font-bold text-lg">
                Decentralization
              </div>
              <span className="text-sm">Operates in a decentralized manner, giving
                power to its community members.</span>
            </div>

          </div>
      </section> */}
    </>
  );
}
