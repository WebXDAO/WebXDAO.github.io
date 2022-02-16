import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'

export default function Moderators() {
  const data = [
    {
      name: 'David Leal',
      bio: 'Open-source maintainer/contributor 💻 Bot/website maintainer for @Heptagram 🤖 @Minetest mod/game maintainer & creator 🎮 Discord moderator in 20+ servers 🛡 Open-source/DSA mentor 🛠',
      imgUrl: 'https://github.com/Panquesito7.png',
      twitterUrl: 'https://twitter.com/David_Leal_7',
      githubUrl: 'https://github.com/Panquesito7'
    },
    {
      name: 'Ritvik Shukla',
      bio: 'Co-Founder | Open Source Enthusiast | Poet | Community 💛',
      imgUrl: 'https://github.com/shuklaritvik06.png',
      twitterUrl: 'https://twitter.com/ShuklaRitvik06',
      githubUrl: 'https://github.com/shuklaritvik06'
    },
    {
      name: 'Shubham Kukreti',
      bio: 'Co-Founder | Web3 & Open Source Enthusiast | Community ❤️',
      imgUrl: 'https://github.com/KukretiShubham.png',
      twitterUrl: 'https://twitter.com/ShubhamKukretii',
      githubUrl: 'https://github.com/KukretiShubham'
    },
    {
      name: 'Vincent Villafuerte',
      bio: 'Founder | Octocat lover | OSS Advocate | DevRel | Community guy 🚩',
      imgUrl: 'https://github.com/vinzvinci.png',
      twitterUrl: 'https://twitter.com/vinzvinci',
      githubUrl: 'https://github.com/vinzvinci'
    },
    {
      name: 'Max Kubik',
      bio: 'Web2 Fullstack Software Engineer 💠 I build webapps and mobile apps for the industry field 🔧 Transitioning to Web3 stacks 🌠 Maintainer for @Web3community 🍬 Open-source newbie!',
      imgUrl: 'https://github.com/mkubdev.png',
      twitterUrl: 'https://twitter.com/digikube1',
      githubUrl: 'https://github.com/mkubdev'
    },
    {
      name: 'Krish Gupta',
      bio: "Started my tech journey on 30th September 2021. Since then, I am learning new things and growing my network. I love to chat, collaborate and contribute. I am an open sourcer, that's my complete bio.",
      imgUrl: 'https://github.com/krshdev.png',
      twitterUrl: 'https://twitter.com/krishguptadev',
      githubUrl: 'https://github.com/krishguptadev'
    }
  ]

  return (
    <>
      <Head>
        <title>Our Moderators | WebXDAO</title>
      </Head>
      <section className='text-white text-center bg-[#00007f]'>
        <div className='px-20 py-20'>
          <h1 className='font-bold text-5xl antialiased'>Community moderators</h1>
          <div className='mt-6 text-xl font-light text-true-gray-500 antialiased'>
            Meet our moderators always providing support
          </div>
        </div>
      </section>

      <div className='flex flex-col'>
        <div className='bg-white pt-12 pb-12 flex-1'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap md:-mx-3 gap-6'>
              <div className='text-black grid grid-col-1 p-3 gap-y-3 md:grid lg:grid-cols-2 md:gap-3 md:p-3'>
                {data.map(({ name, bio, imgUrl, twitterUrl, githubUrl }, index) => (
                  <div
                    key={name + index}
                    className='cursor-pointer hover:z-10 bg-white flex-1 rounded-md shadow focus:outline-none focus:shadow-outline transform transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out p-4'
                  >
                    <div className='grid grid-cols-3 items-center justify-start overflow-hidden p-4'>
                      <div className='relative col-span-1 bg-gray-50 w-full rounded-full p-6'>
                        <Image
                          layout='responsive'
                          width={800}
                          height={800}
                          alt={name}
                          className='rounded-full'
                          src={imgUrl}
                        />
                      </div>
                      <div className='flex flex-col col-span-2 gap-y-3 pl-5'>
                        <h4 className='text-xl font-semibold'>{name}</h4>
                        <p className='text-gray-800 my-2'>
                          {bio}
                          <div className='flex gap-2 mt-auto'>
                            <a
                              aria-hidden='true'
                              className='text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100'
                              href={twitterUrl}
                              rel='noreferrer'
                              target='_blank'
                            >
                              <AiOutlineTwitter className='w-10 h-10 ' />
                            </a>

                            <a
                              aria-hidden='true'
                              className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100'
                              href={githubUrl}
                              rel='noreferrer'
                              target='_blank'
                            >
                              <AiOutlineGithub className='w-10 h-10 ' />
                            </a>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
