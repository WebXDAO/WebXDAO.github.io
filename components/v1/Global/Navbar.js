import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { SiGithubsponsors } from "react-icons/si";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Community Partners", href: "/partners" },
  { name: "WebX Team", href: "/team" },
  { name: "Contributors", href: "/contributors" },
];

const Navbar = () => {
  return (
    <Popover as="header" className="relative">
      <div className="bg-transparent pt-4 sm:pt-6">
        {/* NAVIGATION BAR */}
        <nav
          className="relative mx-auto mb-4 flex max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <Link href="/">
                <a>
                  <>
                    <span className="sr-only ">WebX DAO</span>
                    <Image
                      src="/images/logo/logo.png"
                      width={12}
                      height={12}
                      className="h-12 w-auto cursor-pointer sm:h-12 md:h-[4.2rem]"
                      alt="WebX DAO White Logo"
                    />
                  </>
                </a>
              </Link>
              <div className="-mr-2 flex items-center justify-between lg:hidden ">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            {/* Add content here to get menu next to icon */}
          </div>
          <div className="hidden md:space-x-6 lg:flex lg:items-center">
            <div className="hidden space-x-8 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>

            <a
              href="https://github.com/sponsors/WebXDAO"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white/80"
            >
              GitHub
              <SiGithubsponsors className="ml-3 h-5 w-5 text-pink-600" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top p-2 transition lg:hidden"
        >
          <div className="bg-gradient1/50 overflow-hidden rounded-lg shadow-xl ring-1 ring-white/5 backdrop-blur-sm">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <Image
                  className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
                  width={16}
                  height={16}
                  src="/images/logo/logo.png"
                  alt="WebX DAO"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="focus:ring-cyber-webx inline-flex items-center justify-center rounded-md bg-white/20 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pb-6 pt-5">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* Add button here */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
