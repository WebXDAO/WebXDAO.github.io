"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub,FaLinkedin,FaTwitter } from "react-icons/fa";
import pCardData from "./pCardData";

export default function PCard() {
  return (
    <section className="my-8 md:ml-32">
      <div
        className="no-scroll flex select-none gap-8 overflow-x-auto px-6"
      >
        {pCardData.map((data) => (
          <div className="max-w-[20rem]">
            <div className="relative flex w-80 overflow-hidden rounded-md">
              <Image
                src={`/blog/${data.bgImg}.png`}
                width={320}
                height={420}
                alt=""
                className="h-[28rem] w-80 rounded-md border"
              />
              <div className="absolute bottom-0 flex h-36 w-full items-center justify-center gap-6 rounded-md backdrop-blur">
                <Image
                  src={""}
                  width={100}
                  height={100}
                  alt=""
                  className="rounded-full border bg-gray-700"
                />
                <div className="text-white">
                  <h3 className="font-bold leading-3">{data.name}</h3>
                  <small className="text-xs font-light">{data.team}</small>
                  <div className="mt-1 flex gap-4 text-lg">
                    <Link href={""}>
                      <FaGithub />
                    </Link>
                    <Link href={""}>
                      <FaTwitter />
                    </Link>
                    <Link href={""}>
                      <FaLinkedin />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow px-2 py-4">
              <h3 className="text-sm font-bold">
                {data.title}
              </h3>
              <p className="text-justify text-sm text-gray-700 dark:text-gray-300">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
