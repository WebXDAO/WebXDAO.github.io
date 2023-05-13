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
                  <div className="lg:py-5 p-5">
                    <h1 className="text-5xl text-center font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                      <span className="block">Who Are We?</span>
                    </h1>
                    <p className="mt-3 text-base text-white/80 text-left">
                      WebXDAO is an opensource community that focus on the future of the web. Here
                      you will learn how to become a blockchain developer while having fun with
                      other community members.
                    </p>
                    <div className="">
                      <div className="">
                        <p className="mt-3 text-base text-white/80 text-left">
                          Blockchain Development is an interesting field, in demand and the latest
                          trend in the tech industry. Here you will get to interact with some great
                          folks and learn blockchain technology together. This community is in its
                          initial stage so you can show your leadership skills and help for
                          everyone&apos;s success.
                        </p>
                      </div>
                      <div className="lg:py-5 mt-3">
                        <h1 className="text-5xl text-center font-bold tracking-tight text-white sm:text-6xl  xl:text-4xl">
                          <span className="block">The Mission?</span>
                        </h1>
                        <p className="mt-3 text-base text-white/70 text-center ">
                          Our goal is to build a team of passionate builders around web
                          technologies. We like sharing knowledge as much as we can and grow
                          together.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mt-3">
                      <img
                        className="max-w-full w-96"
                        src="/images/shapes/12.png"
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
