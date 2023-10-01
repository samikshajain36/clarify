import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r shadow-lg">
      <ul className="py-4">
        <li className="font-bold py-2">
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold py-2">
          <Link to="/PricingPage">Pricing</Link>
        </li>
        <li className="font-bold py-2">
          <Link to="/loginpage">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div>
      <nav className='flex justify-between w-full py-3 p-32 shadow'>
        <div className='md:hidden'>
          <button onClick={toggle}>{open ? <Sidebar /> : <i className="fa fa-bars" aria-hidden="true" onClick={toggle} style={{ display: 'block' }}></i>}</button>
        </div>
        <img className="w-[150px]" src="	https://fatoura.work/assets/images/Fatoura-Logo-Dark.png" alt="" />
        <div className='md:flex hidden'>
          <ul className='flex mx-auto m-3 gap-14'>
            <div className='flex flex-col'>
              <li className='font-bold'><Link to='/' > Home</Link> </li>
              <div className='dot opacity-0 h-2 w-2 mt-1 rounded-full dark-blue mx-auto'></div>
            </div>
            <li className='font-bold'><Link to='/PricingPage' onClick={e=>{
                let price = document.getElementById('price')
                e.preventDefault()
                price && price.scrollIntoView()
              }}>Pricing</Link></li>
            <li className='font-bold'><Link to='/contact' onClick={e => {
              let hero = document.getElementById("hero");
              e.preventDefault();  // Stop Page Reloading
              hero && hero.scrollIntoView();
            }}>Contact</Link></li>
          </ul>

          <div className='gap-4 ml-16'>
            <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded'><Link to='/loginpage'> Sign In</Link></button>
            <button className='font-bold m-2 border border-slate-300 p-2 w-24 dark-blue text-white rounded'><Link to='/signup'> Sign Up</Link></button>
            <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded'>EN</button>
          </div>
        </div>
      </nav>
      {/* {open && <Sidebar />} */}
    </div>
  )
}

export default Header