import React from 'react'
import PendingPlans from "./PendingPlans";
import {motion} from 'framer-motion'
import ActiveCases from './ActiveCases';
import UpcomingSessions from './UpcomingSessions';
import PendingReports from './PendingReports';
import FeedbackSummary from './FeedbackSummary';
import PerformanceOverview from './PerformanceOverview';

function Overview() {
  const comps = [<ActiveCases/> ,
    <PendingPlans/>,
    <UpcomingSessions/>,
    <PendingReports/>,
    <FeedbackSummary/>,
    <PerformanceOverview/> ]
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
