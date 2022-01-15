import Head from 'next/head'

export default function Projects() {
    const data = [
        {
            name: 'InVision',
            imgUrl: '/blogs_inVision.png',
            type: 'PREMIUM',
            title: 'Start Here',
            text: 'InVision is the digital product design platform used to make the worlds best customer experiences.',
            tags: ['Documentation']
        },
        {
            name: 'Adobe XD',
            imgUrl: '/blogs_xd.png',
            type: 'FREE',
            title: 'Blockchain Dev Path',
            text: 'Adobe XD is your UI/UX design solution platform for website and mobile appcreation.',
            tags: ['Documentation']
        },
        {
            name: 'Figma',
            imgUrl: '/blogs_figma.png',
            type: 'FREE',
            title: 'Website',
            text: 'Figma helps the teams to create, test, and ship better designs from start to finish.',
            tags: ['Tailwind Css', 'Eleventy', 'Alpine.js']
        }
    ]

    return (
        <>
            <Head>
                <title>Projects | WebXDAO</title>
            </Head>
            <section className='text-white text-center bg-[#00007f]'>
                <div className='px-20 py-20'>
                    <h1 className='font-bold text-3xl md:text-5xl antialiased'>
                        Resources/Projects
                    </h1>
                    <div className='mt-6 text-xl font-light text-true-gray-500 antialiased'>
                        Here you can find a list of good projects and resources to learn about
                        Blockchain and Web 3.0
                    </div>
                </div>
            </section>

            <div className='container max-w-screen-xl mx-auto my-8 grid pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-6 px-8'>
                {data.map(({ name, imgUrl, type, title, text, tags }, index) => (
                    <div
                        key={name + index}
                        className='flex flex-col justify-between items-stretch col-span-3 md:col-span-1 cursor-pointer p-2 shadow rounded-md focus:outline-none focus:shadow-outline transform transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out'
                    >
                        <div className='bg-white p-4 rounded-lg flex flex-col justify-between'>
                            <img
                                className='lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-md w-full object-cover object-center mb-6'
                                src={imgUrl}
                                alt={name}
                            />
                            <div className='flex justify-between'>
                                <h2 className='text-xl text-gray-900 font-semibold mb-4'>
                                    {title}
                                </h2>
                                <h3
                                    className={`tracking-widest ${
                                        type === 'FREE' ? 'text-green-500' : 'text-yellow-500'
                                    } text-sm font-semibold title-font`}
                                >
                                    {type}
                                </h3>
                            </div>

                            <p className='leading-relaxed text-base text-gray-800 mb-5'>{text}</p>

                            <div className='mt-auto justify-items-end text-sm flex flex-wrap gap-3'>
                                {tags.map((item, index) => (
                                    <button
                                        key={item + index}
                                        className='whitespace-nowrap font-semibold bg-blue-100 text-blue-600 rounded-md py-2 px-4 focus:outline-none'
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
