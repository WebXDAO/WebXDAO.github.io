import { fontGilroy } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Icons } from "./icons";

interface Card {
  id: number;
  login: string;
  html_url: string;
  contributions: number;
  avatar_url: string;
}

export default function ContributorCard({data}: {data: Card}) {
  return (
    <div className="flex h-80 w-72 flex-col items-center justify-between rounded-lg border border-black p-4 dark:border-white">
      <div
        className={cn(
          "active:ring-[#411AFF]dark:border-[#3d60ba] container flex w-fit items-center space-x-4 whitespace-nowrap rounded-xl border border-black p-2 align-middle text-lg font-semibold leading-[31px] active:shadow-sm active:ring-2 dark:border-white dark:font-medium",
          fontGilroy.className
        )}
      >
        <div>{data.login.toUpperCase()}</div>
        <div className="text-[#411AFF] dark:text-[#6b4ef8]"> {data.contributions}</div>
        <Icons.handShake className="ml-1 inline-block align-middle" />
      </div>
      <Image
        src={data.avatar_url}
        alt={data.login}
        width={120}
        height={120}
        className="rounded-full border"
      />
      <div className="mb-2 text-2xl">
        <Link href={data.html_url} target="_blank" className="duration-150 hover:text-[#411AFF]">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}
