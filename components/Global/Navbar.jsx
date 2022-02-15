import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBarItem = ({ item, pathname, classprops }) => (
  <a href={item.url}>
    <li
      className={`${
        pathname === item.url && "font-bold"
      } ${classprops} cursor-pointer text-lg inline-block text-gray-500 no-underline hover:text-indigo-500 p-2 xl:px-4 items-center`}
    >
      {item.title}
    </li>
  </a>
);

const Navbar = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItems = [
    { title: "Home", url: "/" },
    { title: "About us", url: "#" },
    { title: "Blog", url: "/blog" },
    { title: "Learn", url: "#" },
    { title: "Community Partners", url: "/partners" },
    { title: "Projects", url: "/projects" },
    { title: "Our team", url: "/moderators" },
  ];

  return (
    <nav className="sticky w-full z-30 top-0 bg-black flex text-gray justify-between items-center">
      <div className="pl-4 m-2 flex items-center cursor-pointer">
        <Link
          className="no-underline hover:no-underline font-bold text-2xl lg:text-2xl"
          href="/"
          passHref
        >
          <Image
            layout="fixed"
            width={73}
            height={73}
            src="/new logo.svg"
            alt="WebXDAO"
          />
        </Link>
      </div>
      <ul className="lg:flex hidden list-none flex-row items-center">
        {navItems.map((item, index) => (
          <NavBarItem
            key={item.title + index}
            item={item}
            pathname={router.asPath}
          />
        ))}
      </ul>
      <div className="flex relative p-2">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="lg:hidden cursor-pointer text-blue-600"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="lg:hidden cursor-pointer text-blue-600"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
flex flex-col justify-start items-end rounded-md blue-glassmorphism"
          >
            <li className="text-xl w-full my-2 text-blue-600">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => (
              <NavBarItem
                key={item + index}
                item={item}
                pathname={router.asPath}
                classprops={"my-2 text-lg !text-black font-bold"}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="text-white">
        <button className="gradient-horizontal p-3 rounded-xl font-bold">
          Join community
        </button>
        <button className="gradient-horizontal p-3 rounded-xl font-bold ml-6">
          Partner with us
        </button>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
