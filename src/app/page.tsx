import ScrollToTopButton from "@/components/ui/TopButton";
import Partners from "@/components/landing/Partners";
import Blurbs from "@/components/landing/Blurbs";
import Main from "@/components/landing/Main";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {

  return (
    <>
      {/* TODO: How can i put the image in the background.. absolute / relative thingy */}
      <Main />

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

      <Blurbs />
      <Partners />
      <ScrollToTopButton />
    </>
  );
}
