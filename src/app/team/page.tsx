import Star from "@/components/star";
import { fontGilroy } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import TeamCard from "@/components/TeamCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team',
}

export default async function Team() {
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
        <div className="ml-4 mr-1 mt-6 flex justify-center text-lg font-light leading-tight text-black dark:text-white sm:text-center md:text-xl lg:text-left ">
        As online collaborators with a strong commitment to Open Source contributions.<br></br>
        We have come together to establish WebX DAO.
        </div>
      </section>

      <div className="container mx-auto grid-cols-2 justify-center gap-10 sm:block md:grid lg:flex ">
      <TeamCard Name="Vincent Villafuerte" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Shubham Kukreti  " position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Ritvik Shukla" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Maxime Kubik" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      </div>
      <h1 className="mt-10 text-center font-bold">WebX Guild Maintainers and Moderators</h1>
      <h1 className="mt-5 text-center">The essential role of our community projects &apos; maintainers and moderators is to ensure the <br/>proper functioning of our codebase and foster a welcoming and engaged community.</h1>
      <div className="container mx-auto my-10 grid-cols-2 justify-center gap-10 sm:block md:grid lg:flex">
      <TeamCard Name="David Leal" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Krish Gupta" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      <TeamCard Name="Abhinav MV" position="WebX Guild Core" github_url="" linkedin_url="" twitter_url=""/>
      </div>
    </>
  );
}
