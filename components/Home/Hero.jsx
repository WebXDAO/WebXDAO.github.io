import Image from 'next/image'

const Hero = () => {
    return (
        <div className='text-white bg-[#00007F] pt-24 py-24'>
            <div className='container px-5 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
                <div className='px-5 flex flex-col w-full md:w-2/5 items-start text-center md:text-left'>
                    <h1 className='my-4 text-3xl font-bold leading-tight'>
                        A new community for Blockchain developers, designers, and Dapp Owners
                    </h1>
                    <p className='leading-normal text-xl mb-8'>
                        An Open Source Community that focuses on decentralized applications, Web
                        3.0, and Blockchain technologies 🚀
                    </p>
                    <div className='flex items-center justify-center w-full md:justify-start'>
                        <a
                            href='https://github.com/WebXDAO/start-here'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button className='bg-[#0086D6] text-white rounded-md my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                                Explore
                            </button>
                        </a>
                    </div>
                </div>

                <div className='relative w-full md:w-3/5 h-96 py-6 text-center items-end'>
                    <Image src='/hero.png' layout='fill' objectFit='contain' alt='Web3' />
                </div>
            </div>
        </div>
    )
}

export default Hero
