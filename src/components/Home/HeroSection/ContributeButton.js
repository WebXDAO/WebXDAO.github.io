import { motion } from 'framer-motion';
import Link from 'next/link';

const ContributeButton = () => {
  return (
    <>
      <motion.button
        className="justify-center border-dark transition-all duration-100 inline-flex items-center rounded-md border border-transparent hover:border-white/80 bg-gray-100 px-8 py-3 text-base font-medium text-slate-700 shadow-md hover:bg-gray-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyber-webx focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        whileTap={{ scale: 1 }}
      >
        <Link href="https://dsc.gg/webxdao">
          <div className="w-full justify-center items-center inline-flex">
            Contribute
            {/* <FaDiscord className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" /> */}
          </div>
        </Link>
      </motion.button>
    </>
  );
};

export default ContributeButton;
