import { motion } from "framer-motion";

interface Callout {
  hasData?: boolean;
}

export function Callout({ hasData }: Callout) {
  return (
    <motion.div
      className={`flex flex-col h-20 overflow-hidden md:h-28`}
      animate={hasData && { opacity: 0, y: "-10rem", height: 0 }}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <h1 className="text-2xl font-black text-primary-100 self-start md:text-[2.5rem] md:leading-normal">
        Find your next anime
      </h1>
      <h2 className="text-base text-gray-400 self-start dark:text-gray-300">
        Recommendations based on what you like
      </h2>
    </motion.div>
  );
}
