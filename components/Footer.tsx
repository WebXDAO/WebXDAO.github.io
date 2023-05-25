import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "@/components/icons";
import Image from "next/image";

export default function Footer() {
    return (
      <footer
        className="
      from-violet-950 from-10% via-violet-950 via-30% to-background to-90% px-8 dark:bg-gradient-to-t"
      >
        <div className="flex h-1/2 w-full flex-col content-center justify-between py-8 md:flex-row md:items-start ">
          <div className="flex py-5 ">
            <ul>
              <div className="flex">
                <div className="flex pb-6 text-3xl  text-slate-900 dark:text-white  ">
                  <span>
                    <Image
                      src="/logo.png"
                      alt="logo_image"
                      className="h-20  w-auto sm:h-14 md:h-20 "
                      height={240}
                      width={240}
                    />
                  </span>
                  <div className="whitespace-pre-wrap ">
                    <h1 className="mt-3 text-lg ">WEBX</h1>

                    <h1 className=" -mt-2 text-2xl font-bold">DAO</h1>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 px-5  ">
                <Link
                  href={siteConfig.links.webxdao_discord}
                  target="_blank"
                  className="dark:fill-white "
                >
                  <Icons.discord
                    className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href={siteConfig.links.webxdao_twitter} target="_blank">
                  <Icons.twitter
                    className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href={siteConfig.links.webxdao_gh} target="_blank">
                  <Icons.gitHub
                    className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href={siteConfig.links.webxdao_linkedin} target="_blank">
                  <Icons.linkedin
                    className="cursor-pointer transition  duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </ul>
          </div>

          <div className="flex flex-col gap-1 md:flex-row md:gap-8">
            <div className="px-5">
              <ul>
                <p className="select-none pb-3 text-xl font-normal text-slate-900 dark:text-white">
                  About Us
                </p>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Who we are?
                </li>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  What we do?
                </li>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Team WebX
                </li>
              </ul>
            </div>
            <div className="px-5">
              <ul>
                <p className="select-none pb-3 text-xl font-normal text-slate-900 dark:text-white">
                  Contact
                </p>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="px-5">
              <ul>
                <p className="select-none pb-3 text-xl font-normal text-slate-900 dark:text-white">
                  Partner
                </p>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Partner with us
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex h-1/2  w-full flex-col content-center px-4 py-8">
          <div className="flex py-5">
            <h4 className="select-none text-base font-medium text-slate-900 dark:text-white">
              © 2023 All rights reserved | Build with ❤ by{" "}
              <span className="cursor-pointer select-none hover:text-blue-600">WebXDAO </span>
            </h4>
          </div>
        </div>
      </footer>
    );
}