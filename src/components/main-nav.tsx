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
import { buttonVariants } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="flex min-w-full justify-between">
      {/* desktop width navbar */}
      <div className="flex w-full justify-between">
        {/* Brand Logo | home page link  */}
        <div className="relative mr-6 flex h-[60px] w-[130px] shrink-0 flex-row items-center">
          {/* logo hidden on dark mode */}
          <Link href="/" className="w-100 block dark:hidden">
            <Image src="/logo-v3-full.png" sizes="(max-width: 768px) 100vw" fill={true} alt="logo" />
          </Link>
          {/* logo hidden on light mode */}
          <Link href="/" className="w-100 hidden dark:block">
            <Image src="/logo-v3-full-dark.png" sizes="(max-width: 768px) 100vw" fill={true} alt="logo" />
          </Link>
        </div>
        {/* container with both nav links and Logos */}
        <div className="flex flex-row md:space-x-6 lg:space-x-12">
          {/* Container - Navigation page links */}
          <div className="min-w-[430px]: flex flex-row align-baseline">
            {items?.length ? (
              <nav className="hidden justify-between md:flex md:gap-6 lg:gap-12">
                {items?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "flex items-center whitespace-nowrap text-xl font-semibold sm:text-sm",
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
          {/* Container - Social Links and Theme Toggler */}
          <div className="hidden flex-row items-center md:flex">
            {/* Github Link with Logo */}
            <Link
              href={siteConfig.links.webxdao_gh}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit us on Github"
              title="Github (External Link)"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {/* Twitter Link with Logo */}
            <Link
              href={siteConfig.links.webxdao_twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit us on Twitter"
              title="Twitter (External Link)"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            {/* Theme Toggle Button  */}
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* mobile hamburger menu */}
      <div className="flex items-center md:hidden">
        {/* humburger menu logo  */}
        <div
          className={`${toggle ? "hidden" : "block"} md:hidden`}
          onClick={() => {
            setToggle(true);
          }}
        >
          <BiMenuAltRight size={40} />
        </div>
        {/* hamburger menu close log  */}
        <div
          className={`${!toggle ? "hidden" : "block"}  md:hidden`}
          onClick={() => {
            setToggle(false);
          }}
        >
          <MdOutlineClose size={40} />
        </div>
        {/* hamburger menu container*/}
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
              {/* Container - Social Links and Theme Toggler */}
              <div className="relative left-[-11px] flex flex-row items-center">
                {/* Github Link with Logo */}
                <Link
                  href={siteConfig.links.webxdao_gh}
                  target="_blank"
                  aria-label="Visit us on Github"
                  title="Github (External Link)"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    <Icons.gitHub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                {/* Twitter Link with Logo */}
                <Link
                  href={siteConfig.links.webxdao_twitter}
                  target="_blank"
                  aria-label="Visit us on Twitter"
                  title="Twitter (External Link)"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    <Icons.twitter className="h-5 w-5 fill-current" />
                    <span className="sr-only">Twitter</span>
                  </div>
                </Link>
                {/* Theme Toggle Button  */}
                <ThemeToggle />
              </div>
            </ul>
          </nav>
        ) : null}
      </div>
    </div>
  );
}
