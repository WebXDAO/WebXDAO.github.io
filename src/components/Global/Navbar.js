import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
      <div className="bg-transparent pt-6">
        {/* NAVIGATION BAR */}
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <>
                  <span className="sr-only ">WebX DAO</span>
                  <img
                    className="h-8 w-auto sm:h-10 cursor-pointer"
                    src="/images/logo/white_logo.png"
                    alt="WebX DAO White Logo"
                  />
                </>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            {/* Add content here to get menu next to icon */}
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden space-x-8 md:ml-10 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-base font-medium text-gray-600 hover:text-white/80  hover:bg-gray-700"
            >
              GitHub
              <SiGithubsponsors
                className="ml-3 h-5 w-5 text-pink-600"
                aria-hidden="true"
              />
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
          className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg backdrop-blur-sm bg-gradient1/50 shadow-xl ring-1 ring-white ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/images/logo/white_logo.png"
                  alt="WebX DAO"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white/20 p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyber-webx">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-100 hover:bg-gray-50"
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
