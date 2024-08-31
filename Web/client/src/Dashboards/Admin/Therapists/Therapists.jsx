import React from 'react'
import TherapistInfo from './TherapistInfo'
import NewTherapistInfo from './NewTherapistInfo'
import TherapyCasesChart from './TherapyCasesChart'

const Therapists = () => {
  return (
    <div className='bg-[#171821] flex flex-col items-center gap-y-10'>
      <TherapistInfo/>
      <NewTherapistInfo/>
      <TherapyCasesChart/>
    </div>
  )
}

export default Therapists