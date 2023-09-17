import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' })
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const toggle = () => {
    setShow(!show)
  }
  const userData = async () => {
    try {
      const data = await axios.post('http://52.91.111.84/auth/login')
        .then((res) => setLogin(res.data.user))
      console.log(data.data.user)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    userData()
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "userinfo",
      JSON.stringify({
        email: login.email,
        password: login.password
      })
    )
    // console.log(signupForm);
    navigate("/dashboard");
  }
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required("Please provide a valid password"),
    passwordMin: Yup.string().oneOf([Yup.ref('password'), null]).min(8, 'Error'),
    passwordLC: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[a-z]/, "Error"),
    passwordUC: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[A-Z]/, "Error"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
  });
  return (
    <div className=' grid grid-flow-row grid grid-cols-2 gap-4'>

      <div class="flex w-[682px] flex-col mx-4 my-4 p-4">
        <h1 className='font-bold mb-2 text-2xl p-2'>Sign In</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form onSubmit={handleSubmit} className='relative'>
              <Field name="email" type="email" placeholder="email" className='border rounded-2xl m-2 p-2 border-black w-[440px]' />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <div>
                <Field name="password" type={show ? "text" : "password"} placeholder="Enter Password" className='border rounded-2xl m-2 p-2 border-black w-[440px]' />
                <i class=" text-2xl" aria-hidden="true" onClick={toggle}>
                  {!show ? <i className="fa fa-eye "></i> : <i class="fa fa-eye-slash"></i>}
                </i>
                {errors.password && touched.password ? <div>{errors.password}</div> : null}
              </div>
              <h1 className='font-bold text-lg m-2'><Link to='/forgotpassword'>Forgot your password?</Link></h1>
              <button type="submit" className='flex dark-blue text-white m-2 w-[440px] p-2 rounded-2xl flex justify-center mt-4'>Let me in</button>
            </Form>
          )}
        </Formik>
        <h1 className='mt-4 p-2 font-bold'>Sign in with Social Media</h1>
        <div className='flex m-2 border w-[220px] rounded-3xl'>
          <img src="https://fatoura.work/assets/images/google.svg" className='w-6 ml-4 flex justify-center items-center' alt="" />
          <button className='flex p-2 rounded-2xl flex justify-center items-center' onSubmit={handleSubmit}>Sign up with Google</button>
        </div>
        <h1 className='m-2 font-bold'>Let me in? <Link to='/loginpage' className='ml-2 font-bold'>Sign up</Link></h1>
        <h1 className='m-2'>Languages: <Link to='/' className='me-1 underline text-blue-500 cursor-pointer'>English Arabic</Link></h1>
      </div>
      <div className='dark-blue'></div>

    </div>
  )
}

export default Login