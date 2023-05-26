import Link from "next/link";
import { Icons } from "./icons";

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
    <div className="bg-white-900/60 dark:border-white-700 flex h-full w-full flex-col justify-between rounded-lg border p-5 shadow duration-200 delay-100">
      <div>
        <div className="flex flex-row">
          {/*<img src={owner?.avatar_url} className="rounded h-40 w-40"/>*/}
          <p>
            <span className="text-black-300 font-semibold">{full_name}</span>
          </p>
        </div>
        <p className="dark:text-white-500 mt-3 text-xs text-gray-500">{description}</p>
        <div className="flex px-6 py-4">
          <Link
            href={url}
            target="_blank"
            className="w-fit-content font-inter text-14.0418 group m-auto mb-0 flex items-center gap-6 rounded border-2 border-black px-4 py-1 font-semibold text-black transition ease-in hover:border-indigo-800 hover:bg-indigo-800 hover:text-white dark:border-white dark:text-white"
          >
            <Icons.ArrowUpRight
              width={20}
              height={18}
              className="dark:color-white my-auto flex items-center transition duration-500 ease-in group-hover:invert"
            />

            <span className=" transition duration-500 ease-in hover:invert">Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
