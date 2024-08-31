import React from 'react'
import CasesPerTherapist from "./CasesPerTherapist";
import PendingPlans from "./PendingPlans";
import SessionNotesReview from "./SessionNotesReview";
import ProgressReports from "./ProgressReports";
import ClinicalRatings from "./ClinicalRatings";
import TherapistPerformanceOverview from "./TherapistPerformanceOverview";
import {motion} from 'framer-motion'
function Overview() {
  const comps = [<CasesPerTherapist/>,
    <PendingPlans/>,
    <SessionNotesReview/>,
    <ProgressReports/>,
    <ClinicalRatings/>,
    <TherapistPerformanceOverview/>]
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      {
        comps.map((c,index)=> <motion.div initial = {{opacity:0,scale:0.6}}whileInView={{opacity:1,scale:1,transition:{
          duration:0.5
        }}} className='w-[90%] m-auto'> {c}</motion.div>)
      }
    </div>
  )
}

export default Overview
