import React from 'react'
import TherapistDashboardNavbar from './TherapistDashboardNavbar'
import ActiveCases from './ActiveCases'
import PendingPlans from './PendingPlans'
import UpcomingSessions from './UpcomingSessions'
import PendingReports from './PendingReports'
import FeedbackSummary from './FeedbackSummary'
import PerformanceOverview from './PerformanceOverview'

const TherapistDashboard = () => {
  return (
    <div className='bg-[#171821] flex flex-col items-center gap-y-10'>
      <TherapistDashboardNavbar/> 
      <ActiveCases/> 
      <PendingPlans/>
      <UpcomingSessions/>
      <PendingReports/>
      <FeedbackSummary/>
      <PerformanceOverview/>
    </div>
  )
}

export default TherapistDashboard