import { createDefaultImageCover } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogData {
  cover_image: string;
  title: string;
  description: string;
  url: string;
  user: {
    username: string;
  }
}

async function getData(): Promise<BlogData[]> {
  const res = await fetch("https://dev.to/api/articles?username=webxdao");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  // Initiate dev.to API request
  const blogData: BlogData[] = await getData();

  return (
    <section className="mt-20">
      <div className="mx-auto max-w-5xl md:px-8">
        <h1 className="mt-10 text-center text-2xl font-bold">Get to know more</h1>
        <p className="mx-auto mt-5 max-w-sm text-center md:max-w-xl lg:max-w-3xl">
          Discover the exciting world of blockchain technology as we come together to collaborate
          and expand our knowledge.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-16">
        {blogData.map((data) => (
          <BCard key={data.title} data={data} />
        ))}
      </div>
    </section>
  );
}

function BCard({ data }: { data: BlogData }) {
  const imgSrc = data.cover_image ?? createDefaultImageCover({
    title: data.title,
    username: data.user.username,
  });
  return (
    <div className="flex max-w-xs flex-col rounded-lg border bg-white/5 p-2 shadow-md shadow-purple-400/40 transition-transform duration-200 ease-in hover:z-50 hover:shadow-lg hover:shadow-purple-400/60 sm:hover:-translate-y-1">
      <Image
        className="h-36 w-full rounded-md border"
        src={imgSrc}
        alt={data.title}
        width={400}
        height={250}
      />
      <div className="grow px-6 py-4">
        <h3 className="mb-4 text-center text-sm font-bold uppercase leading-4 tracking-wider">
          {data.title}
        </h3>
        <p className="text-justify text-sm text-gray-700 dark:text-gray-300">{data.description}</p>
      </div>
      <div className="flex px-6 py-4">
        <Link
          href={data.url}
          target="_blank"
          className="w-fit-content font-inter text-14.0418 group mb-0 mr-auto flex items-center gap-6 rounded border-2 border-solid border-black px-4 py-1 text-black transition delay-0 ease-in hover:border-slate-500 hover:bg-slate-500 hover:font-semibold dark:border-white/80 dark:text-white dark:hover:border-slate-500"
        >
          <Image
            src="/Arrow1.png"
            alt="arrow"
            width={15}
            height={15}
            className="my-auto flex items-center transition duration-100 ease-in group-hover:invert dark:invert"
          />
          <span className="transition duration-100 ease-in group-hover:text-white">Read More</span>
        </Link>
      </div>
    </div>
  );
}
