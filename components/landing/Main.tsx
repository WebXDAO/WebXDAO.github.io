import { siteConfig } from "@/config/site"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import CursorHoverster from "@/components/cursor-hoverster";


export default function Main () {
    return (
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
    )
}