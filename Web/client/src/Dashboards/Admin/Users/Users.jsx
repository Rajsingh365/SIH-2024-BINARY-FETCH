import React from 'react'
import UsersInfo from './UsersInfo'
import VisitorsInfo from './VisitorsInfo'

const Users = () => {
  return (
    <div className='bg-[#171821] flex flex-col items-center gap-y-10'>
      <UsersInfo />
      <VisitorsInfo />
    </div>
  )
}

export default Users