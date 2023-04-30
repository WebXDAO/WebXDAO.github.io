import { SiGithubsponsors } from "react-icons/si";
import Link from "next/link";

const navigation = [
  {
    name: "ABOUT US",
    href: "/about-us",
    children: [
      { name: "Who we are?", href: "/about-us#who" },
      { name: "What we do?", href: "/about-us#what" },
      { name: "Team WebX", href: "/team" },
    ],
  },
  {
    name: "SOCIALS",
    href: "/",
    children: [
      { name: "GitHub", href: "https://github.com/WebXDAO" },
      { name: "Twitter", href: "https://twitter.com/WebXDAO" },
      { name: "Discord", href: "https://discord.webxdao.xyz/" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/76098793" },
    ],
  },
  {
    name: "CONTACT",
    href: "/contact",
    children: [{ name: "Contact us", href: "mailto:web3opensourcecommunity@gmail.com" }],
  },
  {
    name: "PARTNERS",
    href: "/partners",
    children: [
      { name: "Our partners", href: "/partners" },
      { name: "Partner with us", href: "/partners" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <a href="https://webxdao.xyz">
                <span className="sr-only">WebX DAO</span>
                <img className="w-auto h-14 sm:h-16" src="/images/logo/logo.png" alt="WebX DAO Logo" />
              </a>
            </div>
            {/* 
            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white/80 sm:max-w-xs sm:mx-0 sm:text-left">
              Add organization description here!
            </p> */}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            {navigation.map((item) => (
              <>
                <div key={item.name + "_footer"} className="sm:text-left">
                  <p className="text-lg sm:text-sm font-medium text-white/90">{item.name}</p>

                  <nav className="mt-4 sm:mt-8" aria-label={item.name}>
                    <ul className="space-y-4 text-sm">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            className="transition text-white/60 hover:text-white/60/75 "
                            href={child.href}
                            key = {child.name}
                          >
                            <span className="text-white/60 cursor-pointer">{child.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="pt-6 mt-5 sm:mt-12">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="mt-1 text-sm text-gray-500 sm:order-first sm:mt-0">
              <span className="flex items-center justify-center">
                &copy; {new Date().getFullYear()} Made with
                <SiGithubsponsors className="w-3 h-3 m-2 text-pink-600" aria-hidden="true" />
                by WebX DAO
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
