import React from "react";
import image from "../../assets/image.png";
import { TbCircleFilled } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const PatientCard = ({patient}) => {
  return (
    <motion.li
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[24%] min-h-52 border-2 list-none rounded-lg p-3"
    >
      <div className="header flex justify-start gap-6 items-center w-[96%] my-2 m-auto cursor-pointer">
        <div className="profile">
          <img src={image} className="w-[50px] rounded-[50%] " alt="" />
        </div>
        <p className="name ">Jonn Wilson</p>
      </div>
      <hr className="text-cyan-100 w-[90%] m-auto my-2" />
      <div className="text-sm text-gray-400 ">
        <p>
          <strong>Age:</strong> {patient.age}
        </p>
        <p>
          <strong>Gender:</strong> {patient.gender}
        </p>
        <p>
          <strong>Diagnosis:</strong> {patient.diagnosis}
        </p>
        {/* <p>
          <strong>Assigned Therapist:</strong> {patient.therapist}
        </p> */}
      </div>
      <hr className="text-cyan-100 w-[50%] m-auto my-2" />
      <div className="text-sm text-gray-400 ">
        <p>
          <strong>Current Therapy Plan:</strong> {patient.currentTherapyPlan}
        </p>
        <p>
          <strong>Next Session:</strong> {patient.nextSession}
        </p>
        <p>
          <strong>Status:</strong> {patient.status}
        </p>
      </div>
      <hr className="text-cyan-100 w-[50%] m-auto my-2" />

      <div className="flex justify-between">
        <a
          href={`/sessions/${patient.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Sessions
        </a>
        <a
          href={`/reports/${patient.id}`}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          View Report
        </a>
      </div>
    </motion.li>
  );
};
export default PatientCard;
