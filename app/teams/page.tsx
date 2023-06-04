import Star from "../../components/star";
import { fontGilroy } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Head from "next/head";
import TeamCard from "@/components/TeamCard";

export default async function Projects() {
  return (
    <>
      <Head>
        <title>Projects | WebXDAO</title>
      </Head>
      <section className="py-8">
        <div className="container mx-auto flex max-w-5xl flex-row flex-wrap justify-around lg:flex-nowrap">
          <h1
            className={cn(
              "w-max-content my-2 w-full text-center text-7xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-left",
              fontGilroy.className
            )}
          >
            Meet the team
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
        <div className="mt-6 flex justify-center text-left text-lg font-light leading-tight text-black dark:text-white md:text-xl">
        As online collaborators with a strong commitment to Open Source contributions.<br></br>
        We have come together to establish WebX DAO.
        </div>
      </section>

      <div className="container mx-auto flex justify-center gap-10">
      <TeamCard Name="Vincent Villafuerte" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Shubham Kukreti  " position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Ritvik Shukla" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Maxime Kubik" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      </div>
      <h1 className="text-center mt-10 font-bold">WebX Guild Maintainers and Moderators</h1>
      <h1 className="text-center mt-5">The essential role of our community projects' maintainers and moderators is to ensure the <br/>proper functioning of our codebase and foster a welcoming and engaged community.</h1>
      <div className="container mx-auto flex justify-center gap-10 mt-10">
      <TeamCard Name="David Leal" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Krish Gupta" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Abhinav MV" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      </div>
    </>
  );
}
