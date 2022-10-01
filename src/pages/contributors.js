import Head from 'next/head';
import styles from '../styles/contributors.module.css';

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

            <div className={styles.body}>
                <section className={styles.section}>
                    <div className={styles.container}>

                        {data.map((curElem) => {
                            return (
                                <div className={styles.card} key={curElem.login}>
                                    <div className={styles.content}>
                                        <div className={styles.imgBx}><a href={curElem.html_url} target="_blank" rel="noopener noreferrer"><img src={curElem.avatar_url} alt="Avatar" className={styles.img} /></a></div>
                                        <div className={styles.contentBx}>
                                            <a href={curElem.html_url} target="_blank" rel="noopener noreferrer"><h3 className={styles.h3}>{curElem.login}</h3></a>
                                            <h5 className={styles.h5}>
                                                {curElem.contributions}
                                                <svg className={styles.svg} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hands-helping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
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
            </div>


        </>

    );
};

export default contributors;

