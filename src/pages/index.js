import Head from "next/head";
import Hero from "../components/Home/HeroSection/Hero";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebXDAO - Opensource Community</title>
        <meta name="description" content="We are an opensource community working around the future of the web. Learn blockchain technology together. "/>
        <meta name="keywords" content="WebXDAO,Web,Web3,Blockchain,OpenSource,DAO"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="WebXDAO community"/>
      </Head>
      <div className="flex flex-col h-screen">
        <Hero />
      </div>
    </>
  );
}
