"use client";
import { motion } from "framer-motion";

const IntroTransition = {
  delay: 0.4,
  stiffness: 200,
  damping: 40,
  ease: "easeInOut",
  duration: 0.5,
};

const MyIntro = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={IntroTransition}
      >
        Hi there, I am Shamim Ahsan.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={IntroTransition}
      >
        Front End <span className=" text-violet-600">Developer,</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={IntroTransition}
      >
        and Perpetual Learner.
      </motion.p>
    </>
  );
};

export default MyIntro;
