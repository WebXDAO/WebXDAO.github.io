import {
    AiOutlineMail,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiOutlineGithub
} from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
const Footer = () => {
    const settings = {
        name: 'WebXDAO',
        author: 'WebXDAO',
        url: 'https://web3community.github.io'
    }
    const socials = [
        {
            name: 'Mail',
            url: 'mailto:web3opensourcecommunity@gmail.com',
            icon: AiOutlineMail,
            text: 'Contact us via mail'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/web3community/',
            icon: AiOutlineInstagram,
            text: 'Check our content at Instagram'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/web3community',
            icon: AiOutlineTwitter,
            text: 'Follow us via Twitter'
        },

        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/company/web3community',
            icon: AiFillLinkedin,
            text: 'Connect with us at LinkedIn'
        },
        {
            name: 'Twitter',
            url: 'https://github.com/WebXDAO',
            icon: AiOutlineGithub,
            text: 'Contribute at GitHub'
        },
        {
            name: 'Twitter',
            url: 'https://discord.gg/TSRwqx4K2v',
            icon: FaDiscord,
            text: 'Join our Discord community'
        }
    ]
    const resources = [
        { name: 'About Us', url: '#' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact', url: '#' },
        { name: 'FAQ', url: '/faq' }
    ]
    return (
        <footer className='bg-[#1F2E35]'>
            <div className='container mx-auto px-8'>
                <div className='w-full flex flex-col md:flex-row py-6'>
                    <div className='flex-wrap flex-1 md:px-4 mb-6 text-black'>
                        <p className='text-white mb-3 md:mb-6'>Socials</p>
                        <div className='flex space-x-4'>
                            {socials.map(({ url, name, text, icon: Icon }, index) => (
                                <a
                                    aria-hidden='true'
                                    className='text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100'
                                    href={url}
                                    key={name + index}
                                    rel='noreferrer'
                                    target='_blank'
                                    title={text}
                                >
                                    <Icon className='w-5 h-5' />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='flex-1'>
                        <p className='text-white md:mb-6'>Resources</p>
                        <ul className='list-reset mb-6'>
                            {resources.map((item, index) => (
                                <li key={item.name + index} className='mt-2 mr-2 block md:mr-0'>
                                    <a
                                        href={item.url}
                                        className='no-underline text-gray-400 hover:text-blue-500'
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <p className='text-white md:mb-6'>Legal Stuff</p>
                        <ul className='list-reset mb-6'>
                            <li className='mt-2 mr-2 md:block md:mr-0'>
                                <a
                                    href='#'
                                    className='no-underline text-gray-400 hover:text-blue-500'
                                >
                                    Disclaimer
                                </a>
                            </li>
                            <li className='mt-2 mr-2 block md:mr-0'>
                                <a
                                    href='#'
                                    className='no-underline text-gray-400 hover:text-blue-500'
                                >
                                    Financing
                                </a>
                            </li>
                            <li className='mt-2 mr-2 block md:mr-0'>
                                <a
                                    href='#'
                                    className='no-underline text-gray-400 hover:text-blue-500'
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className='mt-2 mr-2 block md:mr-0'>
                                <a
                                    href='#'
                                    className='no-underline text-gray-400 hover:text-blue-500'
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <p className='text-white md:mb-6'>Contact</p>
                        <ul className='list-reset mb-6'>
                            <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                                <a
                                    href='mailto:web3opensourcecommunity@gmail.com'
                                    className='no-underline text-gray-400 hover:text-blue-500'
                                >
                                    web3opensourcecommunity@gmail.com
                                </a>
                            </li>
                            <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                                <a className='no-underline text-gray-400'>Global Open Source</a>
                            </li>
                            <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                                <a className='no-underline text-gray-400'>
                                    Community for Dapps & $Dev
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center text-sm font-light py-4 text-gray-200 bg-[#1D292F]'>
                <small>
                    Copyright &copy; {settings.name + ' '}
                    {new Date().getFullYear()}. Made with ❤️ by
                    <a href={settings.url} target='_blank' className='underline' rel='noreferrer'>
                        {' ' + settings.author}
                    </a>
                    •
                    <a
                        href='https://github.com/WebXDAO/WebXDAO.github.io'
                        className='underline'
                        target='_blank'
                        rel='noreferrer'
                    >
                        View on GitHub
                    </a>
                </small>
            </div>
        </footer>
    )
}

export default Footer
