import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { motion, stagger } from "framer-motion";
const TherapistInfo = () => {
  const totalTherapists = 413;
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: i * 0.5,
        stiffness: 150,
        damping: 30,
      },
    }),
    hidden: {
      opacity: 0,
      x: 10000,
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#21222D] py-10 rounded-lg mx-5 w-[70%] "
    >
      <h2 className="text-3xl font-semibold ml-10 pb-5">Therapist Summary</h2>

      <div className=" gap-x-5 flex items-center justify-center p-5 text-3xl text-center ">
        <motion.div
          variants={variants}
          custom={0}
          animate="visible"
          initial="hidden"
          className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-72 p-2 h-36"
        >
          <div className="stat place-items-center ">
            <div className="stat-figure text-secondary ">
              <FaUserDoctor className="text-[#CB964D] " />
            </div>
            <div className="stat-title">Total Therapist</div>
            <div className="stat-value text-[#CB964D]">{totalTherapists}</div>
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          custom={1}
          animate="visible"
          initial="hidden"
          className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2"
        >
          <div className="stat place-items-center">
            <div className="stat-title">New Therapist</div>
            <div className="stat-value text-secondary">110</div>
            <div className="stat-desc text-secondary">↗︎ (40%)</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TherapistInfo;
