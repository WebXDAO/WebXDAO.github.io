import Image from 'next/image'
import Link from 'next/link'

const DevprotocolBrands = () => {
    const projects = [
        {
            name: 'Dev Protocol',
            imgUrl: '/dev_protocol.png',
            text: 'Dev Protocol integrates with OSS so that projects or creators can authenticate and tokenize their work. It is a whole new creator economy evolving from open creators assets.',
            url: 'https://devprotocol.xyz/'
        },
        {
            name: 'Stakes.Social',
            imgUrl: '/stakes_social.png',
            text: 'Stakes.social is a new sponsor platform where both developers and sponsors are rewarded with tokens if they support their favorite projects by staking $DEV tokens.',
            url: 'https://stakes.social/'
        },
        {
            name: 'Dev Protocol Forum',
            imgUrl: '/dev_protocol_forum.png',
            text: 'Dev Protocol forum is an open conversation for everyone who can collaborate or propose ideas to the Dev Protocol team or help other community members.',
            url: 'https://community.devprotocol.xyz/'
        }
    ]

    return (
        <section className='bg-white py-8'>
            <div className='container max-w-5xl mx-auto m-8'>
                <h1 className='w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800'>
                    Dev Protocol Brand
                </h1>
                <p className='text-center text-gray-800 text-base px-6 mb-5 mx-10'>
                    Our Partner Open Source Projects
                </p>
                <div className='w-full mb-4'>
                    <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
                </div>
            </div>

            <div className='container mx-auto text-black max-w-screen-xl flex flex-wrap flex-col pt-4 mb-8 px-8'>
                <div className='items-center gap-6 text-black grid grid-cols-1 md:grid-cols-3'>
                    {projects.map(({ name, imgUrl, text, url }, index) => (
                        <Link key={name + index} href={url} passHref className='h-full group'>
                            <div className='mx-auto flex flex-col justify-evenly items-center h-full object-center text-center p-8 shadow cursor-pointer rounded-md focus:outline-none focus:shadow-outline transform bg-white transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out'>
                                <div className='relative h-24 w-full flex-shrink-0'>
                                    <Image
                                        src={imgUrl}
                                        alt={name}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <p className='text-gray-800 mt-8 mb-2 text-sm px-8 sm:px-4 h-full'>
                                    {text}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DevprotocolBrands
