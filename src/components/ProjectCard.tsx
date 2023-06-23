import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ImArrowUpRight2 } from "react-icons/im";
import { cn }  from "../lib/utils";
import { fontSans } from "@/lib/fonts";

const ProjectCard = ({
  full_name,
  url,
  description,
}: {
  full_name: string;
  url: string;
  description: string;
}) => {
  return (
    <>
      {/* Project Card Container */}
      <div className={cn(fontSans.variable ,"flex w-[356px] flex-col items-start justify-between gap-8 justify-self-center rounded-[10px] border border-black/5 px-[28px] pb-[24px] pt-[28px] shadow-[0px_0px_10px_0px_#00000010] hover:shadow-sm dark:border-white/20 dark:shadow-[0px_0px_10px_0px_#FFFFFF25] md:w-full md:lg:min-h-[240px]")}>
        {/* Heading and Description Container */}
        <div className="flex flex-col items-start gap-3">
          {/* Heading */}
          <h2 className="text-base font-bold">{full_name}</h2>
          {/* Description */}
          <p className="text-justify text-base font-normal dark:text-white/50">{description}</p>
        </div>
        {/* Read More Button */}
        <Link
          href={url}
          className="border-3 flex w-fit flex-row items-center justify-start gap-1 rounded-[10px] border border-black bg-white px-2 py-1 transition-all hover:shadow-sm hover:outline hover:outline-1 dark:border-white/60 dark:bg-black"
        >
          <ImArrowUpRight2/>
          <span className="text-sm font-semibold dark:text-white">Read More</span>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
