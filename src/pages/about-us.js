import Head from "next/head";
import AboutSection from "../components/Home/AboutSection";
// import AboutSection from "../components/Home/AboutSectionSection/Hero";

export default function Home({ articles }) {
	return (
		<>
			<Head>
				<title>WebXDAO - Opensource Community</title>
			</Head>
			<div className="flex flex-col h-screen">
				<AboutSection />
				
			</div>
		</>
	);
}
