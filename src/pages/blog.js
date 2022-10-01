import Head from 'next/head';
// import { Blogs } from '../components/Global'

export const getStaticProps = async () => {
  const res = await fetch('https://dev.to/api/articles?username=webxdao');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blogs = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog | WebXDAO</title>
      </Head>
      <section className='py-8'>

        <div className='container max-w-5xl mx-auto'>
          <h1 className='w-full my-2 text-4xl font-bold leading-tight text-center text-white'>
            Blogs
          </h1>
          <div className='w-full mb-4'>
            <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
          </div>
        </div>

        <div className='absolute top-40 -left-16 w-96 h-96 bg-gradient-to-t from-[#1BFFFF] to-[#2E3192] rounded-full'></div>
        <div className='absolute top-96 -right-80 w-[50rem] h-[50rem] bg-gradient-to-t from-[#FBB03B] to-[#D4145A] rounded-full'></div>

        <section>
          <div className='relative z-2 flex justify-center items-center flex-wrap my-7 mx-0'>

            {data.map((curElem) => {
              return (
                <div className='group z-2 relative w-min h-min bg-white bg-opacity-5 m-10 shadow-2xl rounded-2xl flex justify-conten items-center backdrop-filter backdrop-blur-md'>
                  <div className='relative xl:w-[35rem] sx:w-[17rem] h-80 flex justify-center items-center flex-col opacity-70  hover:opacity-100'>

                    <div className='relative w-4/5 rounded-2xl truncate border-8 border-solid border-black/25 group-hover:-translate-y-6 duration-500'>
                      <img src={curElem.cover_image} className='relative top-0 left-0 w-full h-full object-cover ' />
                    </div>
                    <div className='relative justify-center items-center flex-wrap mx-0 my-0 text-center'>
                      <h3 className='group-hover:-translate-y-6 duration-500 text-white uppercase font-medium text-sm text-center tracking-wider mt-5 mr-2.5 ml-2.5 mb-2.5 leading-4 '>
                        <b>{curElem.title}</b>
                        <br></br><br></br>
                        <spam className='text-xs font-light lowercase'>
                          {curElem.description}
                        </spam>
                        <a href={curElem.url} target="_blank" className='rounded-md bg-green-500 pl-4 pr-4 text-base font-normal mb-0 mt-0 m-auto'>
                          <b>Read</b>
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  )
}

export default blogs;