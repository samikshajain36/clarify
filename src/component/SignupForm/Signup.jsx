import axios from 'axios'
import { Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

const Signup = () => {
  const [signupForm, setSignupForm] = useState({ fname: "", lname: "", phone: "", email: "", password: "", refferal: "" })
  const navigate = useNavigate();
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
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "userinfo",
      JSON.stringify({
        email: signupForm.email,
        password: signupForm.password
      })
    )
    console.log(signupForm);
    navigate("/loginpage");
  }
  const SignupSchema = Yup.object().shape({
    fname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
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
        <h1 className='font-bold mb-2 text-2xl p-2'>Sign Up</h1>
        <Formik
          initialValues={{
            fname: '',
            lname: '',
            email: '',
            phone: '',
            password: '',

          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Field name="fname" placeholder=" Enter First Name" className='border rounded-2xl m-2 mr-4 p-3 border-black p-2' />
              {errors.fname && touched.fname ? (
                <div>{errors.fname}</div>
              ) : null}
              <Field name="lname" placeholder=' Enter Last Name' className='border rounded-2xl m-2 p-3 border-black' />
              {errors.lname && touched.lname ? (
                <div>{errors.lname}</div>
              ) : null}
              <Field name="email" type="email" placeholder="email" className='border rounded-2xl m-2 p-3 border-black w-[440px]' />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field name="phone" type="number" placeholder="Enter Mobile Number" className='border rounded-2xl m-2 p-3 border-black w-[440px]' />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
              <Field name="password" type="password" placeholder="Enter Password"  className='border rounded-2xl m-2 p-3 border-black w-[440px]' />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <Field type="text" name='referral' placeholder="Referral Code (Optional)" className='border rounded-2xl m-2 p-3 border-black w-[440px]' />
              <button type="submit" className='flex dark-blue text-white m-2 w-[440px] p-2 rounded-2xl flex justify-center mt-4'>Create Account</button>
            </Form>
          )}
        </Formik>
        <h1 className='mt-4 p-2 font-bold'>or
        </h1>
        <div className='flex m-2 border w-[220px] rounded-3xl'>
          <img src="https://fatoura.work/assets/images/google.svg" className='w-6 ml-4 flex justify-center items-center' alt="" />
          <button className='flex p-2 rounded-2xl flex justify-center items-center' onSubmit={handleSubmit}>Sign up with Google</button>
        </div>
        <h1 className='m-2 font-bold'>Already a member? <Link to='/loginpage' className='ml-2 font-bold'>Sign in</Link></h1>
        <h1 className='m-2'>Languages: <Link to='/' className='me-1 underline text-blue-500 cursor-pointer'>English Arabic</Link></h1>
      </div>
      <div className='dark-blue h-full'></div>

    </div>

  )
}

export default Signup