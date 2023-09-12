import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className='flex justify-between w-f py-3 p-32 shadow-lg '>
          <img className="w-[150px]" src="	https://fatoura.work/assets/images/Fatoura-Logo-Dark.png" alt="" />
            <ul className='flex mx-auto m-3 gap-14 '>
              <div className='flex flex-col'>
                <li className='font-bold'><Link to='/'> Home</Link> </li>
                <div className='dot opacity-0 h-2 w-2 mt-1 rounded-full dark-blue mx-auto'></div>
                </div>
                <li className='font-bold'><Link to='/PricingPage'> Pricing</Link></li>
                <li className='font-bold'><Link to='/loginpage'>Contact</Link></li>
            </ul>
            <div className='gap-4'>
            <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded'><Link to='/loginpage'> Sign In</Link></button>
            <button className='font-bold m-2 border border-slate-300 p-2 w-24 dark-blue text-white rounded'><Link to='/signup'> Sign Up</Link></button>
            <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded'>EN</button>
            </div>
        </nav>
    </div>
  )
}

export default Header