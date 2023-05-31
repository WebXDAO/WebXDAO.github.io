import Link from "next/link";
import { Icons } from "./icons";
import { Button, buttonVariants } from "./ui/button";

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
    <div className="bg-white-900/60 dark:border-white-700 flex h-full w-full flex-col justify-between rounded-lg border p-5 shadow">
      <div>
        <div className="flex flex-row">
          {/*<img src={owner?.avatar_url} className="rounded h-40 w-40"/>*/}
          <p>
            <span className="text-black-300 font-semibold">{full_name}</span>
          </p>
        </div>
        <p className="dark:text-white-500 mt-3 text-xs text-gray-500">{description}</p>
        <div className="flex items-center justify-center px-2 py-4">
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Read more
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
