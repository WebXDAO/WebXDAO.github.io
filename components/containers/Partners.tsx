import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface PartnersProps { }

const data = [
    {
        img: "/Dev-protocol-1.png",
        para: "Dev Protocol is designed as a unique protocol to fairly evaluate OSS, which has been economically undervalued for decades. It is built on the Ethereum blockchain and brings economic value to all open source activities.",
        url: "https://devprotocol.xyz/",
    },
    {
        img: "/The-Algorithms-1.png",
        para: "The Algorithms is an open source community for learning Data Structures & Algorithms and their implementation in any Programming Language.",
        url: "https://the-algorithms.com/",
    },
    {
        img: "/Lumos-Labs-1.png",
        para: "Lumos labs is building a metaverse for builders and Web3 ecosystem enablers to share opportunities to build scale-up.",
        url: "https://twitter.com/lumoslabsHQ",
    },
];

const Partners: FC<PartnersProps> = ({ }) => {
    return (
        <section className="container mt-20 grid items-center justify-center gap-6 pb-8 pt-6  md:py-10">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2">
                <h3 className="px-32 text-xl font-extrabold leading-tight tracking-tighter bg-gradient-to-r from-indigo-700 via-purple-400 to-slate-400 inline-block text-transparent bg-clip-text sm:text-2xl md:text-3xl lg:text-2xl">
                    Get to know our Community Partners
                </h3>
                <h2>Community Partners we highly value</h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-24">
                {data.map(({ img, para, url }, index) => (
                    <div key={index} className="cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50 flex max-w-xs flex-col rounded-lg bg-white shadow-md shadow-purple-300">
                        <Image className="w-full" src={img} width={400} height={250} alt="" />
                        <div className="grow px-6 py-4">
                            <p className="text-justify text-sm text-gray-700">{para}</p>
                        </div>
                        <div className="flex px-6 py-4">
                            <Link
                                href={url}
                                target="_blank"
                                className="m-auto w-fit-content font-inter text-14.0418 mb-0 mr-auto flex items-center gap-6 rounded border-2 border-solid border-black px-4 py-1 font-semibold text-black group transition ease-in hover:bg-indigo-800 hover:border-indigo-800"
                            >
                                <Image src="/Arrow1.png" alt="arrow" width={15} height={18} className="my-auto flex items-center group-hover:invert transition duration-500 ease-in filter " />
                              
                                <span className=" group-hover:invert transition duration-500 ease-in">Read More</span>
                               
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
