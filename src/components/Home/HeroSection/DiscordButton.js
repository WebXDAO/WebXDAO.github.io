import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const DiscordButton = () => {
  return (
    <>
      {/* <div className="inline-flex w-full">
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Join WebXDAO
          <FaDiscord className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div> */}

      <motion.button
        className="justify-center inline-flex transition-all duration-100 items-center rounded-md border border-transparent hover:border-white/80 bg-cyber-webx px-4 py-3 text-base font-medium text-white/80 hover:text-white shadow-sm hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-900 focus:outline-none focus:ring-2 focus:ring-cyber-webx focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        whileTap={{ scale: 1 }}
      >
        <Link href="https://dsc.gg/webxdao">
          <div className="w-full justify-center items-center inline-flex">
            Join WebXDAO
            <FaDiscord className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </div>
        </Link>
      </motion.button>
    </>
  );
};

export default DiscordButton;
