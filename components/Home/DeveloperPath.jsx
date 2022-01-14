import Image from 'next/image'

const DeveloperPath = () => {
    const devPaths = [
        {
            name: 'Simplilearn',
            imgUrl: '/simplilearn.png',
            text: 'Blockchain tutorial for beginners to advanced Level.',
            url: 'https://www.simplilearn.com/tutorials/blockchain-tutorial?source=sl_frs_nav_playlist_video_clicked'
        },
        {
            name: 'Learn with Whiteboard',
            imgUrl: '/whiteboard.png',
            text: 'The skills required for a blockchain developer which is one of the in-demand professions today.',
            url: 'https://www.youtube.com/watch?v=x9l3y0cdpuU'
        },
        {
            name: 'Figment',
            imgUrl: '/figment.png',
            text: 'The Web 3 education platform for developers, by developers.Learn the Web 3 basics with 101 Pathways.',
            url: 'https://learn.figment.io/'
        },

        {
            name: 'CryptoZombies',
            imgUrl: '/cryptozombie.png',
            text: 'CryptoZombies is an interactive school that teaches you all things technical about blockchains.',
            url: 'https://cryptozombies.io/'
        }
    ]

    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto max-w-7xl pt-8'>
                <h1 className='w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800'>
                    Blockchain Developer Path
                </h1>
                <p className='text-center text-gray-800 text-base px-6 mb-5 mx-10'>
                    The latest field in the tech industry
                </p>
                <div className='w-full mb-4'>
                    <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
                </div>

                <div className='text-black grid grid-col-1 p-3 gap-y-3 md:grid md:grid-cols-2 md:gap-3 md:p-3'>
                    {devPaths.map(({ name, imgUrl, text, url }, index) => (
                        <div
                            key={name + index}
                            className='bg-white flex-1 rounded-md shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 hover:shadow-lg hover:z-20 duration-300 ease-in-out p-4'
                        >
                            <div className='flex items-center justify-start overflow-hidden'>
                                <div className='relative bg-contain w-1/3'>
                                    <Image
                                        alt={name}
                                        layout='responsive'
                                        height={150}
                                        width={150}
                                        className='bg-gray-50 p-5 rounded-md'
                                        src={imgUrl}
                                    />
                                </div>
                                <div id='body' className='flex flex-col gap-y-3 pl-5'>
                                    <h4 id='name' className='text-xl font-semibold'>
                                        {name}
                                    </h4>
                                    <p id='caption' className='text-gray-800'>
                                        {text}
                                    </p>
                                    <div id='label' className='flex text-sm gap-x-3'>
                                        <a href={url}>
                                            <button className='cursor-pointer font-semibold bg-blue-100 text-blue-600  rounded-md py-2 px-4 focus:outline-none'>
                                                Take me there!
                                            </button>
                                        </a>
                                        <button className='font-semibold bg-blue-100 text-blue-600 rounded-md py-2 px-4 focus:outline-none'>
                                            Development
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center items-center py-5'>
                    <a
                        href='https://github.com/web3community/blockchain-dev-path'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='bg-gray-700 text-white rounded-md py-2 px-8 shadow transform transition hover:scale-85 hover:shadow-lg duration-300 ease-in-out'>
                            See All
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default DeveloperPath
