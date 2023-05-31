// 'use client'

import Partners from "@/components/containers/Partners";
import CursorHoverster from "@/components/cursor-hoverster";
import { Icons } from "@/components/icons";
import ScrollToTopButton from "@/components/ui/TopButton";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {

  let year = new Date().getFullYear();

  return (
    <>
      {/* TODO: How can i put the image in the background.. absolute / relative thingy */}

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex max-w-[980px] flex-col items-center gap-2 ">
            <h1 className="bg-gradient-to-r from-indigo-700 via-purple-700 to-slate-900 bg-clip-text text-3xl font-medium leading-tight tracking-tighter text-transparent mix-blend-difference sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Shaping web</span>
              <span className="block">that will captivate</span>
              <span className="block">the world.</span>
            </h1>
          </div>

          <div className="flex justify-center gap-4">
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
              href={siteConfig.links.webxdao_guild}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Image alt="guild.xyz logo" src="/guild-logo.png" className="mr-2 h-5 w-5 rounded-full" width={150} height={150}/>
                Guild.xyz
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="max-w-[700px] text-lg text-slate-900 dark:text-white sm:text-xl">
              Our community is based on open-source principles and we&apos;re focused on shaping the
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
          className="absolute left-[12rem] top-[12rem]"
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
      <section className="container mt-20 grid items-center justify-center gap-6 pb-8 pt-6 text-center md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h3 className="inline-block max-w-2xl bg-gradient-to-r from-indigo-700 via-purple-400 to-slate-400 bg-clip-text text-xl font-extrabold leading-tight tracking-tighter text-transparent sm:text-2xl md:text-3xl lg:text-2xl">
            Become an integral part of a dynamic and vibrant network of like-minded developers
          </h3>
          <div className="mt-4 flex gap-4">
            <Link target="_blank" rel="noreferrer" href={siteConfig.links.webxdao_twitter}>
              <div className="flex items-center">
                <Icons.twitter className="mr-1 h-5 w-5 cursor-pointer fill-current" />
                <span className="cursor-pointer">Twitter</span>
              </div>
            </Link>

            <Link target="_blank" rel="noreferrer" href={siteConfig.links.webxdao_discord}>
              <div className="flex items-center">
                <Icons.discord className="mr-1 h-5 w-5 cursor-pointer fill-current" />
                <span className="cursor-pointer">Discord</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blurbs */}
      <section className=" flex justify-center px-4 py-0 md:px-10">
        <div className="my-12 flex flex-col md:flex-row md:gap-8">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300">
              <Icons.collaborate className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Collaborate</div>
            <span className="text-sm">
              Collaborate with other members to achieve common goals and objectives.
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center md:mt-0">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300">
              <Icons.blockchain className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Blockchain</div>
            <span className="text-sm">
              Dedicated to exploring new ways to leverage the power of this transformative technology.
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center md:mt-0">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300">
              <Icons.decentralization className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Decentralization</div>
            <span className="text-sm">
              Operates in a decentralized manner, giving power to its community members.
            </span>
          </div>
        </div>
      </section>


      {/* Partners */}
      <Partners />
      <ScrollToTopButton />
    </>
  );
}
