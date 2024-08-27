import React from 'react'
import CasesPerTherapist from './CasesPerTherapist'
import PendingPlans from './PendingPlans'
import SessionNotesReview from './SessionNotesReview'
import ProgressReports from './ProgressReports'
import ClinicalRatings from './ClinicalRatings'
import TherapistPerformanceOverview from './TherapistPerformanceOverview'
import SupervisorDashboardNavbar from './SupervisorDashboardNavbar'

const SupervisorDashboard = () => {
  return (
    <div className='bg-[#171821] flex flex-col items-center gap-y-10'>
      <SupervisorDashboardNavbar/>  
      <CasesPerTherapist/>
      <PendingPlans/>
      <SessionNotesReview/>
      <ProgressReports/>
      <ClinicalRatings/>
      <TherapistPerformanceOverview/>
    </div>
  )
}

export default SupervisorDashboard