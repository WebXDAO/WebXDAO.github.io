const Hero = () => {
  return (
    <>
      <section className="bg-transparent h-full">
        <div className="px-4 py-32 mx-auto max-w-screen-xl lg:h-full lg:items-center lg:flex lg:flex-wrap">
          <div className="max-w-xl text-white text-center md:text-left">
            <h1 className="text-6xl font-bold sm:text-7xl">
              Build with us,{' '}
              <span className="sm:block">the future of web.</span>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white/50">
              We focus on building and talking about possible future usage of
              web technologies.
            </p>

            <div className="flex flex-wrap mt-8 text-center items-center justify-center md:justify-start gap-4">
              <button
                type="button"
                className="border-dark inline-flex items-center rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-slate-700 shadow-md hover:bg-gray-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyber-webx focus:ring-offset-2"
              >
                Join WebXDAO
              </button>
              <button
                href="https://github.com/WebXDAO/start-here"
                type="button"
                className="border-dark inline-flex items-center rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-slate-700 shadow-md hover:bg-gray-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyber-webx focus:ring-offset-2"
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
