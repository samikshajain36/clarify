import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='flex justify-center dark-blue h-[450px] p-10 flex-col items-center'>
                <div className='w-4/6 flex justify-between p-10 text-white font-bold items-center'>
                    <h1><Link  to='/'>Sign up</Link></h1>
                    <h1><Link to='/'> Sign in</Link></h1>
                    <h1><Link to='/'>Terms and Conditions</Link></h1>
                    <h1><Link to='/'>Privacy Policy</Link></h1>
                    <h1> <Link to='/contact'>Contact Us</Link></h1>
                   
                </div>

            <h1 className='text-white'>Copyright @ IHTIRAF. Made with love by Brain Inventory.</h1>

            </div>
        </div>
    )
}

export default Footer