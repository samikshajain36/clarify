import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(false)

  const toggle = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div>
         <div className='dashboardbg w-[230px] h-[651px] fixed'>
        <div className='p-6'>
          <img className="w-[200px]" src="	https://fatoura.work/assets/images/Fatoura-Logo.png" alt="" />
        </div>
        <div className='flex text-white px-6 py-4'>
          <img className='me-2' src="https://fatoura.work/assets/images/Mask%20Group%207.svg" alt="" />
          <h1><Link to='/dashboard'>Dashboard</Link></h1>
        </div>
        <div className='flex text-white px-6 py-4'>
          <img className='me-2' src="https://fatoura.work/assets/images/Mask%20Group%20392.svg" alt="" />
          <h1>My Documents</h1>
        </div>
        <div className='flex  text-white px-6 py-4'>
          <img className='me-2' src="https://fatoura.work/assets/images/Mask%20Group%20393.svg" alt="" />
          <h1>My Reports</h1>
        </div>

      </div>
     
      
    </div>
  )
}

export default Sidebar