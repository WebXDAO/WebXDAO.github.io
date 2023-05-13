// pages/404.js
import Head from "next/head";
import { motion } from "framer-motion";
import Link from 'next/link'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 | WebXDAO</title>
      </Head>
      <div className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6 text-white">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-4 text-base text-gray-300">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link href="/">
                  <motion.a
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium transition-all duration-100 border border-transparent rounded-md shadow-sm hover:border-white/80 bg-cyber-webx text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-900 focus:outline-none focus:ring-2 focus:ring-cyber-webx focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                  href="/"
                  >
                    Go back home
                  </motion.a>
                </Link>
                {/* <Link href="/support">
                  <a className="inline-flex items-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-black hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                    Contact support
                  </a>
                </Link> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Custom404
