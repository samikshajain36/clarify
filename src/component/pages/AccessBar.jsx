import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AccessBar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggle = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <div>
            <nav className=' ml-56 white shadow p-4 '>
                <div>
                    <button
                        className='border border-slate-300 p-2 rounded-xl dashboardbg text-white'
                        onClick={toggle}
                    >
                        Create New
                        <span className='ml-2'>+</span>
                    </button>
                </div>
            </nav>
            {/* Conditionally render the list based on openMenu state */}
            {openMenu && (
                <div className='menu-container margin2 rounded-lg w-48 absolute'>
                    <ul className='p-6 flex justify-center flex-col items-center'>
                        <li><Link to='/myinvoice'>Invoice</Link></li>
                        <li><Link>Bill</Link></li>
                        <li><Link>Quote</Link></li>
                        <li><Link>Purchase Order</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default AccessBar