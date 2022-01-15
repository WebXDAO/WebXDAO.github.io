import Link from 'next/link'

const Blogs = ({ articles, show = articles.length }) => {
    return (
        <section className='bg-white py-8'>
            <div className='container max-w-5xl mx-auto'>
                <h1 className='w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800'>
                    Blogs
                </h1>
                <div className='w-full mb-4'>
                    <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
                </div>
            </div>
            <div className='container max-w-screen-xl mx-auto pt-4 pb-8 grid grid-cols-3 mb-8 gap-6 px-8'>
                {articles.length > 0 ? (
                    articles.slice(0, show).map((article, index) => (
                        <Link key={article.title + index} href={article.url} passHref>
                            <div className='flex flex-col justify-between items-stretch col-span-3 md:col-span-1 cursor-pointer p-2 shadow rounded-md focus:outline-none focus:shadow-outline transform transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out'>
                                <div className='bg-white p-4 rounded-lg'>
                                    <img
                                        className='lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-md w-full object-cover object-center mb-6'
                                        src={article.social_image}
                                        alt={article.title}
                                    />
                                    <div className='flex justify-between'>
                                        <h2 className='text-xl text-gray-900 font-semibold mb-4'>
                                            {article.title}
                                        </h2>
                                    </div>
                                    <p className='leading-relaxed text-sm text-gray-600'>
                                        {article.description}
                                    </p>
                                </div>
                                <time className='p-4 text-gray-500 text-xs flex items-end'>
                                    <img
                                        src={article?.user?.profile_image}
                                        alt={article.user.name}
                                        className='w-10 h-10 rounded-full mr-2'
                                    />
                                    <p className='opacity-50'>
                                        by {article.user.name} on
                                        {' ' + article.readable_publish_date}
                                    </p>
                                </time>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className='text-center w-full'>No Blogs found....</div>
                )}
            </div>

            <div className='flex justify-center'>
                <a href='https://dev.to/web3community' target='_blank' rel='noreferrer'>
                    <button className='bg-gray-700 text-white mx-auto lg:mx-0 rounded-md py-2 px-8 shadow transform transition hover:scale-85 hover:shadow-lg duration-300 ease-in-out'>
                        See All
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Blogs
