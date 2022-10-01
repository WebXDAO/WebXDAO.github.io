import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch('https://api.github.com/repos/WebXDAO/webXDAO.github.io/contributors');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const contributors = ({ data }) => {
    return (
        <>
            <Head>
                <title>Contributors | WebXDAO</title>
            </Head>
            <section>
                <div className='relative z-1 my-[40px] mx-0 flex justify-center items-center flex-wrap'>

                    {data.map((curElem) => {
                        return (
                            <div className='group relative w-48 h-64 m-5 flex justify-center items-center bg-white bg-opacity-5 m-10 shadow-2xl rounded-2xl backdrop-filter backdrop-blur-md' key={curElem.login}>
                                <div className='relative flex justify-center items-center flex-col opacity-70  hover:opacity-100'>
                                    <div className='relative w-40 h-40 overflow-hidden rounded-full truncate border-8 border-solid border-black/25 group-hover:-translate-y-6 duration-500'>
                                        <a href={curElem.html_url} target="_blank" rel="noopener noreferrer">
                                            <img src={curElem.avatar_url} alt="Avatar" className='relative top-0 left-0 w-full h-full object-cover' />
                                        </a>
                                    </div>
                                    <div className='relative justify-center items-center relative justify-center items-center flex-wrap text-center mx-0 my-0'>
                                        <a href={curElem.html_url} target="_blank" rel="noopener noreferrer">
                                            <h3 className='group-hover:-translate-y-6 duration-500 text-white uppercase font-medium text-sm text-center tracking-wider mt-5 mr-2.5 ml-2.5 mb-2.5 leading-4'>
                                                {curElem.login}
                                            </h3>
                                        </a>
                                        <h5 className='group-hover:-translate-y-6 duration-500 rounded-md bg-green-500 pl-4 pr-4 text-base font-normal mb-0 mt-0 m-auto w-fit h-fit'>
                                            {curElem.contributions}
                                            <svg className='overflow-visible inline-block w-[1.25em] lowercase h-[1em] align-[-0.125em]' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hands-helping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                                <path fill="currentColor" d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z">
                                                </path>
                                            </svg>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default contributors;