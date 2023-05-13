import Head from "next/head";
import Hero from "../components/Home/HeroSection/Hero";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebXDAO - OpenSource Community</title>
        <meta name="description" content="We are an OpenSource community working around the future of the web. Learn Blockchain technology together."/>
        <meta name="keywords" content="WebXDAO,Web,Web3,Blockchain,OpenSource,DAO"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="WebXDAO community"/>
        <meta property="og:title" content="WebXDAO - OpenSource Community"/>
        <meta property="og:image" content="https://github.com/WebXDAO.png"/>
        <meta property="og:url" content="https://webxdao.xyz"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:description" content="We are an OpenSource community working around the future of the web. Learn Blockchain technology together."/>

      </Head>
      <div className="flex flex-col h-screen">
        <Hero />
      </div>
    </>
  );
}
