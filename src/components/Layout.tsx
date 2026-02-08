// components/Layout.tsx
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { type ReactNode } from "react";

const variants = {
  hidden: { opacity: 0 }, // starting state
  enter: { opacity: 1, transition: { duration: 0.5 } }, // fade-in effect
  exit: { opacity: 0, transition: { duration: 0.5 } }, // fade-out effect
};

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <motion.div
      className="relative flex min-h-screen flex-col items-center"
      key={router.route}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
