import { motion } from "framer-motion";

interface Callout {
  hasData?: boolean;
}

export function Callout({ hasData }: Callout) {
  return (
    <motion.div
      className={`flex flex-col overflow-hidden`}
      initial={{ opacity: 1, height: "7.5rem" }}
      animate={hasData && { opacity: 0, y: "-10rem", height: 0 }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <h1 className="text-[2.5rem] font-black text-primary-100 self-start">
        Find your next anime
      </h1>
      <h2 className="text-base text-gray-400 self-start mb-9 dark:text-gray-300">
        Recommendations based on what you like
      </h2>
    </motion.div>
  );
}
