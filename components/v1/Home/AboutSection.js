import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <div className="">
        <section className="">
          <div className=" bg-transparent">
            <div className="items-center">
              <div className="">
                <div className=" sm:px-6">
                  <div className="p-5 lg:py-5">
                    <h1 className="text-center text-5xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                      <span className="block">Who Are We?</span>
                    </h1>
                    <p className="mt-3 text-left text-base text-white/80">
                      Welcome to WebXDAO, an open-source community dedicated to shaping the future of the web. Our primary focus revolves around empowering individuals to become proficient blockchain developers while fostering an engaging and enjoyable environment alongside fellow community members.WebXDAO is an opensource community that focus on the future of the web. Here
                      you will learn how to become a blockchain developer.
                      At WebXDAO, we recognize the immense potential of blockchain technology and its transformative impact on the web. Our goal is to equip aspiring developers with the necessary tools, knowledge, and resources to navigate this exciting domain effectively.
                    </p>
                    <div className="">
                      <div className="">
                        <p className="mt-3 text-left text-base text-white/80">
                          Blockchain Development is an interesting field, in demand and the latest
                          trend in the tech industry.Explore the captivating world of blockchain development, the high-demand and cutting-edge trend in the tech industry. Join our vibrant community of like-minded individuals, where you can interact with exceptional individuals and embark on a collective journey of learning blockchain technology. Here you will get to interact with some great
                          folks and learn blockchain technology together. This community is in its
                          initial stage so you can show your leadership skills and help for
                          everyone. As our community is in its initial stage, there is a unique opportunity for you to showcase your leadership skills and make a meaningful impact. Help shape the growth of this community by sharing your knowledge, insights, and expertise to benefit everyone involved. Together, we can build a thriving ecosystem where everyone can thrive and succeed&apos;s success.
                        </p>
                      </div>
                      <div className="mt-3 lg:py-5">
                        <h1 className="text-center text-5xl font-bold tracking-tight text-white sm:text-6xl  xl:text-4xl">
                          <span className="block">The Mission?</span>
                        </h1>
                        <p className="mt-3 text-center text-base text-white/70 ">
                          Our goal is to build a team of passionate builders around web
                          technologies. We like sharing knowledge as much as we can and grow
                          together.At the core of our mission lies the ambition to establish a comprehensive and highly proficient team of passionate builders, specialized in the realm of web technologies. We are driven by an insatiable thirst for knowledge and a deep-rooted desire to cultivate growth collectively. Our unwavering commitment to these principles fuels our relentless pursuit of excellence.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-center">
                      <Image
                        src="/images/shapes/12.png"
                        width={400}
                        height={250}
                        className="w-96 max-w-full"
                        alt="OSS Community"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
