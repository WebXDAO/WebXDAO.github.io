import Head from "next/head";
import Star from "@/components/star";
import { fontGilroy } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Blog from "./Blog";
import PCard from "./PCard";
// import { Blogs } from '@/components/Global'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};


export default function BlogPage() {

  return (
    <>
      <section className="w-full overflow-hidden py-8">
        <div className="container mx-auto flex max-w-5xl flex-row flex-wrap justify-around lg:flex-nowrap ">
          <h1
            className={cn(
              "w-max-content my-2 w-full text-center text-7xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-left",
              fontGilroy.className
            )}
          >
            Dev Blog
          </h1>
          <div className="mt-9 hidden gap-20 lg:flex">
            <div className="my-auto flex">
              <Star height={40} width={40} />
            </div>
            <Star height={90} width={90} />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="900" height="2" className="-mx-52 mb-11 mt-auto hidden lg:flex">
            <line x1="0" y1="0" x2="1000" y2="0" strokeWidth="2" className="stroke-black dark:stroke-white"/>
          </svg>
        </div>
        <div className="ml-4 mr-1 mt-6 flex justify-center text-lg font-light leading-tight text-black dark:text-white sm:text-center md:text-xl lg:text-left ">
          Our primary emphasis is on cutting-edge platforms in the industry, ensuring that{" "}
          <br className="max-md:hidden" />
          you are equipped with the necessary skills for your future endeavors.
        </div>
      </section>

        <PCard />
      
      <main className="mx-auto grid max-w-6xl gap-8 px-4">
        <div className="mx-auto max-w-5xl">
          <h1 className="my-10 text-center text-xl font-bold">Categories</h1>
          <div className="flex flex-wrap justify-center gap-9 sm:gap-14">
            {["Dapp", "Open Source", "Blockchain", "Community", "Hackathons"].map((name) => (
              <div className="w-40 rounded py-2 text-center shadow-md shadow-purple-400/40">
                {name}
              </div>
            ))}
          </div>
        </div>
        {/* @ts-expect-error Async Server Component */}
        <Blog />
      </main>
    </>
  );
}
