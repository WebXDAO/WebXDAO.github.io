import Image from 'next/image'

const Testimonials = () => {
    const data = [
        {
            name: 'Wahid Ari',
            imgUrl: '/placeholder/placeholder_1.png',
            userTitle: 'Designer',
            text: 'Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif',
            rating: 2
        },
        {
            name: 'Wahid Ari',
            imgUrl: '/placeholder/placeholder_2.png',
            userTitle: 'Developer',
            text: 'Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif',
            rating: 5
        },
        {
            name: 'Wahid Ari',
            imgUrl: '/placeholder/placeholder_3.png',
            userTitle: 'UI/UX Designer',
            text: 'Gear Menyediakan informasi tools yang powerful untuk Designer, Developer, dan juga Business Owner agar bisa lebih produktif',
            rating: 3
        }
    ]

    return (
        <section className='bg-gray-50 py-8'>
            <div className='container max-w-5xl mx-auto m-8'>
                <h1 className='w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800'>
                    Testimonials
                </h1>
                <p className='text-center text-gray-800 text-base px-6 mb-5 mx-10'>
                    Community Members Experience
                </p>
                <div className='w-full mb-4'>
                    <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
                </div>
            </div>

            <div className='lg:container mx-auto flex flex-wrap pt-4 mb-8 px-8 pb-12'>
                <div className='items-center gap-6 text-black grid grid-cols-1 md:grid-cols-3'>
                    {data.map(({ name, imgUrl, userTitle, rating, text }, index) => (
                        <div
                            key={name + index}
                            className='mx-auto flex flex-col justify-evenly h-full content-start p-6 shadow cursor-pointer rounded-md focus:outline-none focus:shadow-outline transform bg-white transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out'
                        >
                            <div className='flex py-4'>
                                <div className='flex items-center'>
                                    {Array.from(Array(Math.floor(rating)).keys()).map(
                                        (item, index) => (
                                            <svg
                                                key={item + index}
                                                className='mx-1 w-4 h-4 fill-current text-yellow-500'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                            </svg>
                                        )
                                    )}
                                    {Array.from(Array(5 - Math.floor(rating)).keys()).map(
                                        (item, index) => (
                                            <svg
                                                key={item + index}
                                                className='mx-1 w-4 h-4 fill-current text-gray-400'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                            >
                                                <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                            </svg>
                                        )
                                    )}
                                </div>
                            </div>
                            <p className='text-gray-600 text-base mb-2'>{text}</p>
                            <div className='flex flex-row items-center justify-start py-2'>
                                <div className='relative h-16 w-16 flex-shrink-0'>
                                    <Image
                                        src={imgUrl}
                                        alt={name}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>

                                <div className='flex flex-col justify-center pl-3'>
                                    <div className='w-full font-bold text-xl text-gray-800'>
                                        {name}
                                    </div>
                                    <p className='text-gray-800 text-base'>{userTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
