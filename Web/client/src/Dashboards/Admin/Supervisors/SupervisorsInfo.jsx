import React from 'react'
import {
  MdOutlineSupervisedUserCircle,
  MdSupervisorAccount,
} from "react-icons/md";
import { motion } from 'framer-motion';
const SupervisorsInfo = () => {
  const totalSupervisors=47
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition:{
        type:"spring",
        delay:i*0.5,
        stiffness:150,
        damping:30,
      },
      
    }),
    hidden: {
      opacity: 0,
      x: 10000,
    },
  };
  return (
    <div className="bg-[#21222D] py-10 rounded-lg mx-5 w-[70%] ">
      <h2 className="text-3xl font-semibold ml-10 pb-5">Supervisor Summary</h2>
      <div className=" gap-x-5 flex items-center justify-center p-5 text-3xl text-center ">
       
        <motion.div 
        variants={variants}
        custom={0}
        animate="visible"
        initial="hidden"
        className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-80 p-2 h-36" >
          <div className="stat place-items-center ">
            <div class="stat-figure text-secondary ">
              <MdOutlineSupervisedUserCircle className="text-[#CB964D] " />
            </div>
            <div className="stat-title">Total Supervisors</div>
            <div className="stat-value text-[#CB964D]">{totalSupervisors}</div>
          </div>
        </motion.div>

        <motion.div 
        variants={variants}
        custom={1}
        animate="visible"
        initial="hidden" 
        className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-80 p-2">
         <div className="stat place-items-center">
            <div className="stat-title">New Supervisors</div>
            <div className="stat-value text-secondary">11</div>
            <div className="stat-desc text-secondary">↗︎ (12%)</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default SupervisorsInfo




