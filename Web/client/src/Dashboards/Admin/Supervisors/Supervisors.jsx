import React from 'react'
import SupervisorsInfo from './SupervisorsInfo'
import NewSupervisorsInfo from './NewSupervisorsInfo'
import SupervisorApprovalChart from './SupervisorApprovalChart'

const Supervisors = () => {
  return (
    <div className='bg-[#171821] flex flex-col items-center gap-y-10'>
      <SupervisorsInfo/>
      <NewSupervisorsInfo/>
      <SupervisorApprovalChart/>
    </div>
  )
}

export default Supervisors