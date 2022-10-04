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
      <div className="pt-6 bg-transparent">
        {/* NAVIGATION BAR */}
        <nav
          className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <>
                  <span className="sr-only ">WebX DAO</span>
                  <img
                    className="w-auto h-8 cursor-pointer sm:h-10"
                    src="/images/logo/white_logo.png"
                    alt="WebX DAO White Logo"
                  />
                </>
              </Link>
              <div className="flex items-center -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-transparent rounded-md focus-ring-inset hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            {/* Add content here to get menu next to icon */}
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden space-x-8 md:ml-10 md:flex">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-600 bg-gray-100 border border-transparent rounded-md hover:text-white/80 hover:bg-gray-700"
            >
              GitHub
              <SiGithubsponsors className="w-5 h-5 ml-3 text-pink-600" aria-hidden="true" />
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
          className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top transform md:hidden"
        >
          <div className="overflow-hidden rounded-lg shadow-xl backdrop-blur-sm bg-gradient1/50 ring-1 ring-white ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img className="w-auto h-8" src="/images/logo/white_logo.png" alt="WebX DAO" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-white/20 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyber-webx">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-50"
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
