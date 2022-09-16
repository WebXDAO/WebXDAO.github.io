import { motion } from 'framer-motion';
import Link from 'next/link';

const ContributeButton = () => {
  return (
    <>
      <motion.button
        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-all duration-100 bg-gray-100 border border-transparent rounded-md shadow-md border-dark hover:border-white/80 text-slate-700 hover:bg-gray-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyber-webx focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >
        <Link href="https://github.com/webxdao">
          <a className="inline-flex items-center justify-center w-full">
            Contribute
          </a>
        </Link>
      </motion.button>
    </>
  );
};

export default ContributeButton;
