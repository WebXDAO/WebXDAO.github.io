import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const DiscordButton = () => {
  return (
    <>
      <motion.a
        className="bg-cyber-webx focus:ring-cyber-webx inline-flex items-center justify-center rounded-md border border-transparent px-4 py-3 text-base font-medium text-white/80 shadow-sm transition-all duration-100 hover:border-white/80 hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        href="https://discord.webxdao.xyz/"
      >
        Join WebXDAO
        <FaDiscord className="-mr-1 ml-3 h-5 w-5" aria-hidden="true" />
      </motion.a>
    </>
  );
};

export default DiscordButton;
