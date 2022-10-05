import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const DiscordButton = () => {
  return (
    <>
      <motion.a
        className="inline-flex items-center justify-center px-4 py-3 text-base font-medium transition-all duration-100 border border-transparent rounded-md shadow-sm hover:border-white/80 bg-cyber-webx text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-900 focus:outline-none focus:ring-2 focus:ring-cyber-webx focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        href="https://dsc.gg/webxdao"
      >
        Join WebXDAO
        <FaDiscord className="w-5 h-5 ml-3 -mr-1" aria-hidden="true" />
      </motion.a>
    </>
  );
};

export default DiscordButton;
