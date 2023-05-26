"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="flex min-w-full justify-between">
      <div className="md:hidden">
        <div
          className={`${toggle ? "hidden" : "block"} md:hidden`}
          onClick={() => {
            setToggle(true);
          }}
        >
          <BiMenuAltRight size={40} />
        </div>
        <div
          className={`${!toggle ? "hidden" : "block"}  md:hidden`}
          onClick={() => {
            setToggle(false);
          }}
        >
          <MdOutlineClose size={40} />
        </div>

        {items?.length ? (
          <nav
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute left-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl border border-solid border-white bg-[#171717] p-6 text-[#b4b0d0]`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className={`font-poppins cursor-pointer text-[16px] font-medium`}
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </ul>
          </nav>
        ) : null}
      </div>
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="items-center space-x-2 md:flex">
          {/* <Icons.logo className="h-6 w-6" /> */}
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <div className="right-0"></div>
          <span className="hidden font-bold md:inline-block">{siteConfig.name}</span>
        </Link>

        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
