import Head from "next/head";
import Hero from "../components/Home/HeroSection/Hero";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebXDAO - Opensource Community</title>
      </Head>
      <div className="flex flex-col h-screen">
        <Hero />
      </div>
    </>
  );
}
