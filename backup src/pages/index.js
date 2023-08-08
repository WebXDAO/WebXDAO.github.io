import Head from "next/head";
import Hero from "../components/Home/HeroSection/Hero";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebXDAO - OpenSource Community</title>
        <meta
          name="description"
          content="We are an OpenSource community working around the future of the web. Learn Blockchain technology together."
        />
        <meta name="keywords" content="WebXDAO,Web,Web3,Blockchain,OpenSource,DAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="WebXDAO community" />
        <meta property="og:title" content="WebXDAO - OpenSource Community" />
        <meta property="og:image" content="https://github.com/WebXDAO.png" />
        <meta property="og:url" content="https://webxdao.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content="We are an OpenSource community working around the future of the web. Learn Blockchain technology together."
        />
        <meta name="language" content="English" />
        <meta name="linkedin:profile" content="" />
        <meta property="instagram:username" content="" />
        <meta name="twitter:site" content="https://twitter.com/WebXDAO" />
        <meta property="discord:server" content="835424705410236427" />
        <meta property="discord:invite" content="https://discord.com/invite/tyEW2gVhdF" />
      </Head>
      <div className="flex h-screen flex-col">
        <Hero />
      </div>
    </>
  );
}
