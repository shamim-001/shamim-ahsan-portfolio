"use client";
import { motion } from "framer-motion";

const MyIntro = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, stiffness: 200, damping: 40 }}
      >
        Hi there, I am Shamim Ahsan.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, stiffness: 200, damping: 40 }}
      >
        Front End <span className=" text-violet-600">Developer,</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, stiffness: 200, damping: 40 }}
      >
        and Perpetual Learner.
      </motion.p>
    </>
  );
};

export default MyIntro;
