import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Signup = () => {
    const [signupForm, setSignupForm] = useState({ email: "", password: "" })
    const userData = async () => {
        try {
            const data = await axios.post('http://52.91.111.84/auth/register')
            .then((res) => setSignupForm(res.data.data))
          console.log(data.data)
        } catch (e) {
          console.log(e);
        }
      }
    useEffect(() => {
        userData()
    })

    const handleChange = (e) => {
        setSignupForm({
            ...signupForm,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    localStorage.setItem(
      "userinfo",
      JSON.stringify({
        email: signupForm.email,
        password: signupForm.password
      })
    )
    }

    return (
        <div  className=' grid grid-flow-row grid grid-cols-2 gap-x-4 text-center gap-4'>
          
          <div class="flex w-[682px] flex-col mx-4 my-4">
            <div className='flex'>
             <input type="text"
              placeholder="Email"
              value={signupForm?.email}
              name="email"
              className='border-2 rounded-2xl m-2 p-2 border-black'
              onChange={handleChange} />
            <input  className='border-2 rounded-2xl m-2 p-2 border-black' type="password" name="password" 
             placeholder='password'
              value={signupForm?.password} onChange={handleChange}/>
            </div>
            <input type="text"
              placeholder="asdrf"
              value={signupForm?.email}
              name="email"
              className='border-2 rounded-2xl m-2 p-2 border-black w-[420px]'
              onChange={handleChange} />
               <input type="text"
              placeholder="Email"
              value={signupForm?.email}
              name="email"
              className='border-2 rounded-2xl m-2 p-2 border-black w-[420px]'
              onChange={handleChange} />
               <input type="text"
              placeholder="Email"
              value={signupForm?.email}
              name="email"
              className='border-2 rounded-2xl m-2 p-2 border-black w-[420px]'
              onChange={handleChange} />
               <input type="text"
              placeholder="Email"
              value={signupForm?.email}
              name="email"
              className='border-2 rounded-2xl m-2 p-2 border-black w-[420px]'
              onChange={handleChange} />
            <button onSubmit={handleSubmit}>submit</button>
            </div>
          <div class="dark-blue w-full">01</div>
  
        </div>

    )
}

export default Signup