import React from 'react'
import '../../Contact.css'

const Contact = () => {
  return (
    <div id='hero'>
         <div className='flex mb-7 mb-8 p-6 light-color-1 flex-wrap justify-center gap-14'>
                <div className='flex flex-col '>
                    <h1>Contact Us</h1>
                    <h1 className='text-5xl Gilroy-Bold mb-8 font-bold'>Let’s Get in Touch!</h1>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <input type="text" className='m-4 h-[70px] w-[350px] border rounded-lg p-4 rounded-xl  p-4 border border-black block ng-untouched ng-pristine ng-invalid' placeholder='Full Name' />
                        <input type="text" className='m-4 h-[70px] border rounded-lg p-4 rounded-xl  p-4  border border-black block ng-untouched ng-pristine ng-invalid' placeholder='Email Address' />
                        <input type="text" className='m-4 h-[70px] border rounded-lg p-4 rounded-xl  p-4 h-40 border border-black block ng-untouched ng-pristine ng-invalid' placeholder='Message' />
                    </div>
                    <button className='w-[123px] m-4 border-2 h-[40px] rounded-xl border-black'>Send</button>
                    </div>
            </div>

    </div>
  )
}

export default Contact