import React from "react";
import image from "../../assets/image.png";
import { TbCircleFilled } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import {motion} from 'framer-motion'

const TherapistCard = () => {
  return (
    <motion.li 
    initial={{scale:0.8,opacity:0}}
    whileInView={{scale:1,opacity:1}}
    whileHover={{scale:1.05,transition:{duration:0.5}}}
    transition={{duration:0.5,ease:'easeInOut'}}
    className="w-[24%] min-h-52 border-2 list-none rounded-lg p-3">
      <div className="header flex justify-start gap-6 items-center w-[96%] my-2 m-auto cursor-pointer">
        <div className="profile">
          <img src={image} className="w-[50px] rounded-[50%] " alt="" />
        </div>
        <p className="name ">Jonn Wilson</p>
      </div>
      <hr className="text-cyan-100 w-[90%] m-auto my-2" />
      <div className="details w-[90%] m-auto">
        <h4>Case Summary</h4>
        <div className="flex items-center gap-3">
          <TbCircleFilled color="lightGreen" />
          <p className="activcases">Active Cases: 200 </p>
        </div>
        <div className="flex items-center gap-3">
          <TbCircleFilled color="Blue" />
          <p className="totalcases">Total Cases: 1200</p>
        </div>
      </div>
      <div className="details w-[90%] m-auto">
        <h4>Requests </h4>
        <div className="flex items-center gap-3">
          <TbCircleFilled color="yellow" />
          <p className="pending">Pending : 30</p>
        </div>
        <div className="flex items-center gap-3">
          <TbCircleFilled color="green" />
          <p className="pending">Approved :230</p>
        </div>

        <p className="rating flex items-center gap-2">
          <h5>Rating :</h5>
          <span className="flex gap-1">
            <TbStarFilled color="white" />
            <TbStarFilled color="white" />
            <TbStarFilled color="white" />
            <TbStarFilled color="white" />
          </span>
        </p>
      </div>
    </motion.li>
  );
};

export default TherapistCard;
