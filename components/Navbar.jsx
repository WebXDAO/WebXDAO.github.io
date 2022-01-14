import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBarItem = ({ item, pathname, classprops }) => (
    <Link href={item.url} passHref>
        <li
            className={`${
                pathname === item.url && 'font-bold'
            } ${classprops} text-ml inline-block text-blue-800 no-underline hover:text-indigo-500 py-2 px-4 items-center`}
        >
            {item.title}
        </li>
    </Link>
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
            <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
                <div className='pl-4 flex items-center'>
                    <Link
                        className='toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-2xl'
                        href='/'
                        passHref
                    >
                        <img src='/logo.png' alt='Web 3 Community' className='h-16 items-start' />
                    </Link>
                </div>
                <ul className='lg:flex hidden list-none flex-row justify-between items-center flex-initial'>
                    {navItems.map((item, index) => (
                        <NavBarItem key={item.title + index} item={item} pathname={router.asPath} />
                    ))}
                </ul>
                <div className='flex relative'>
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
                            className='md:hidden cursor-pointer text-blue-600'
                            onClick={() => setToggleMenu(false)}
                        />
                    )}
                    {toggleMenu && (
                        <ul
                            className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in'
                        >
                            <li className='text-xl w-full my-2 text-blue-600'>
                                <AiOutlineClose onClick={() => setToggleMenu(false)} />
                            </li>
                            {navItems.map((item, index) => (
                                <NavBarItem
                                    key={item + index}
                                    item={item}
                                    pathname={router.asPath}
                                    classprops={'my-2 text-lg'}
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

{
    /* <nav className='w-full z-30 top-0 text-white bg-white relative'>
<div className='md:flex-[0.5] flex-initial justify-center items-center'>
    <Image
        src='/logo.png'
        layout='responsive'
        width={80}
        height={40}
        alt='logo'
        className='w-32 cursor-pointer'
    />
</div>
<ul className='md:flex hidden list-none flex-row justify-between items-center flex-initial'>
    {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
        <NavBarItem key={item + index} title={item} />
    ))}
    <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
        Login
    </li>
</ul>
<div className='flex relative'>
    {!toggleMenu && (
        <HiMenuAlt4
            fontSize={28}
            className='md:hidden cursor-pointer'
            onClick={() => setToggleMenu(true)}
        />
    )}
    {toggleMenu && (
        <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(false)}
        />
    )}
    {toggleMenu && (
        <ul
            className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in'
        >
            <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                <NavBarItem key={item + index} title={item} classprops='my-2 text-lg' />
            ))}
        </ul>
    )}
</div>
</nav> */
}