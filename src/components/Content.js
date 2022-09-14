export default function Content() {
  return (
    <div className="h-full bg-white">
      <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text  text-6xl sm:text-8xl  font-extrabold text-transparent">
            Dapp Hackathon Next.js Starter
          </h1>
          <p className="mt-4 font-semibold text-slate-700">
            Let&apos;s build your Hackathon Dapp faster with this starter -
            Tailwind + Redux
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              className="border-dark mt-10 inline-flex items-center rounded-md border bg-gray-100 px-4 py-2 text-base font-medium text-slate-700 shadow-md hover:bg-gray-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2"
            >
              Join WebXDAO
            </button>
            <button
              href="https://github.com/WebXDAO/nextjs-dapp-template"
              type="button"
              className="border-dark mt-10 inline-flex items-center rounded-md border bg-gray-100 px-4 py-2 text-base font-medium text-slate-700 shadow-md hover:bg-gray-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2"
            >
              Contribute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
