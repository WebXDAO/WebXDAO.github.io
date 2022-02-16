import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {prefix} from '../../constants'
const NavBarItem = ({ item, pathname, classprops }) => (
  <a href={item.url}>
    <li
      className={`${
        pathname === item.url && 'font-bold'
      } ${classprops} cursor-pointer text-ml inline-block text-blue-800 no-underline hover:text-indigo-500 p-2 xl:px-4 items-center`}
    >
      {item.title}
    </li>
  </a>
)

const Navbar = () => {
  const router = useRouter()
  const [toggleMenu, setToggleMenu] = useState(false)
  const navItems = [
    { title: 'HOME', url: '/' },
    { title: 'LEARN', url: '#' },
    { title: 'BLOG', url: '/blog' },
    { title: 'ABOUT', url: '#' },
    { title: 'PROJECTS', url: '/projects' },
    { title: 'COMMUNITY PARTNERS', url: '/partners' },
    { title: 'OUR MODERATORS', url: '/moderators' }
  ]

  return (
    <nav className='sticky w-full z-30 top-0 text-white bg-white'>
      <div className='w-full container mx-auto flex items-center justify-between mt-0 py-2'>
        <div className='pl-4 flex items-center cursor-pointer'>
          <Link
            className='text-black no-underline hover:no-underline font-bold text-2xl lg:text-2xl'
            href='/'
            passHref
          >
            <img src={prefix+'/logo.png'} alt='WebXDAO' className='w-24 h-14 md:w-36 md:h-20'/>
          </Link>
        </div>
        <ul className='lg:flex hidden list-none flex-row justify-end items-center ml-auto'>
          {navItems.map((item, index) => (
            <NavBarItem key={item.title + index} item={item} pathname={router.asPath} />
          ))}
        </ul>
        <div className='flex relative p-2'>
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className='lg:hidden cursor-pointer text-blue-600'
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className='lg:hidden cursor-pointer text-blue-600'
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
flex flex-col justify-start items-end rounded-md blue-glassmorphism'
            >
              <li className='text-xl w-full my-2 text-blue-600 cursor-pointer '>
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {navItems.map((item, index) => (
                <NavBarItem
                  key={item + index}
                  item={item}
                  pathname={router.asPath}
                  classprops={'my-2 text-lg !text-black font-bold'}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr className='border-b border-gray-100 opacity-25 my-0 py-0' />
    </nav>
  )
}

export default Navbar
