import React, { useState } from 'react'
import '../Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggle =()=>{
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
        <h1>Dahboard</h1>
      </div>
      <div className='flex text-white px-6 py-4'>
        <img  className='me-2' src="https://fatoura.work/assets/images/Mask%20Group%20392.svg" alt="" />
        <h1>My Documents</h1>
      </div>
      <div className='flex  text-white px-6 py-4'>
        <img  className='me-2' src="https://fatoura.work/assets/images/Mask%20Group%20393.svg" alt="" />
        <h1>My Reports</h1>
      </div>
      
      </div>
      <nav className='bg-white shadow p-6 '>
        <div className='margin'>
          <button
            className='border border-slate-300 p-2 rounded-xl dashboardbg text-white'
            onClick={toggle}
          >
            Create
            <span className='ml-2'>+</span>
          </button>
        </div>
      </nav>
      {/* Conditionally render the list based on openMenu state */}
      {openMenu && (
        <div className='menu-container margin2 rounded-lg w-48'>
          <ul className='p-6 flex justify-center flex-col items-center'>
            <li><Link>Invoice</Link></li>
            <li><Link>Bill</Link></li>
            <li><Link>Quote</Link></li>
            <li><Link>Purchase Order</Link></li>
          </ul>
        </div>
      )}

    </div>
  )
  
}

export default Dashboard