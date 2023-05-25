import Star from "../../components/star";
import { fontGilroy } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";

async function getRepoData() {
  const res = await fetch("https://api.github.com/orgs/WebXDAO/repos");

  if (!res.ok) {
    throw new Error("Error Fetching Data! Please try again later.");
  }

  return res.json();
}

export default async function Projects() {
  const projectsData = await getRepoData();
  console.log(projectsData);
  return (
    <>
      <Head>
        <title>Projects | WebXDAO</title>
      </Head>
      <section className="py-8">
        <div className="container mx-auto flex max-w-5xl flex-row flex-wrap justify-around lg:flex-nowrap">
          <h1
            className={cn(
              "w-max-content my-2 w-full text-left text-7xl font-semibold leading-tight text-slate-900 dark:text-white",
              fontGilroy.className
            )}
          >
            Projects to check
          </h1>
          <div className="mt-10 flex gap-20">
            <div className="my-auto flex">
              <Star height={40} width={40} />
            </div>
            <Star height={90} width={90} />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="900" height="2" className="-mx-52 mb-11 mt-auto">
            <line x1="0" y1="0" x2="1000" y2="0" strokeWidth="2" className="stroke-black dark:stroke-white"/>
          </svg>
        </div>
        <div className="mx-80 mt-6 flex text-center text-lg font-light leading-tight text-black dark:text-white md:text-xl">
          to learn about Blockchain and Web 3.0
        </div>
      </section>

      <div className="container mx-auto my-8 mb-0 grid max-w-screen-xl grid-cols-1 gap-6 px-8 pb-8 sm:mb-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.length > 0 &&
          projectsData.map(
            ({
              full_name,
              description,
              html_url,
              owner,
              index,
            }: {
              full_name: string;
              description: string;
              html_url: string;
              owner: string;
              index: number;
            }) => (
              <div
                key={index}
                className="focus:shadow-outline col-span-3 flex cursor-pointer flex-col items-stretch justify-between rounded-md p-2 shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none md:col-span-1"
              >
                <ProjectCard
                  key={index}
                  full_name={full_name}
                  description={description}
                  url={html_url}
                  owner={owner}
                />
              </div>
            )
          )}
      </div>
    </>
  );
}
