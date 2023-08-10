import Link from "next/link";
import { SiGithubsponsors } from "react-icons/si";

const navigation = [
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "Who we are?", href: "/about-us#who" },
      { name: "What we do?", href: "/about-us#what" },
      { name: "Team WebX", href: "/team" },
    ],
  },
  {
    name: "Socials",
    href: "/",
    children: [
      { name: "GitHub", href: "https://github.com/WebXDAO" },
      { name: "Twitter", href: "https://twitter.com/WebXDAO" },
      { name: "Discord", href: "https://discord.webxdao.xyz/" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/76098793" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    children: [{ name: "Contact us", href: "mailto:web3opensourcecommunity@gmail.com" }],
  },
  {
    name: "Partners",
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
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link href="https://webxdao.xyz">
                <span className="sr-only">WebX DAO</span>
                <img className="h-12 w-auto sm:h-14 md:h-16" src="/images/logo/logo.png" alt="" />
              </Link>
            </div>
            {/* 
            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-white/80 sm:max-w-xs sm:mx-0 sm:text-left">
              Add organization description here!
            </p> */}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {navigation.map((item) => (
              <>
                <div key={item.name + "_footer"} className="sm:text-left">
                  <p className="text-lg font-medium text-white/90 sm:text-sm">{item.name}</p>

                  <nav className="mt-4 sm:mt-3" aria-label={item.name}>
                    <ul className="space-y-4 text-sm">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link href="/">
                            <span className="cursor-pointer text-white/60 transition hover:text-white/95">
                              {child.name}
                            </span>
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

        <div className="mt-5 pt-6 sm:mt-12">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="mt-1 text-sm text-gray-500 sm:order-first sm:mt-0">
              <span className="flex items-center justify-center">
                &copy; {new Date().getFullYear()} Made with
                <SiGithubsponsors className="m-2 h-3 w-3 text-pink-600" aria-hidden="true" />
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
