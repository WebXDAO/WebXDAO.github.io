import { motion } from "framer-motion";
import Link from "next/link";

const ContributeButton = () => {
  return (
    <>
      <motion.a
        className="border-dark focus:ring-cyber-webx inline-flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-slate-700 shadow-md transition-all duration-100 hover:border-white/80 hover:bg-gray-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        href="https://github.com/WebXDAO"
      >
        Contribute
      </motion.a>
    </>
  );
};

export default ContributeButton;
