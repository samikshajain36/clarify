import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";

import '../../Home.css'
// SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


const images = [
  {
    url: 'https://fatoura.work/assets/images/section3.1.svg',
    alternativeText: "Sweden Photo One",
  },
  // {
  //   url: '	https://fatoura.work/assets/images/section3.2.svg',
  //   alternativeText: "Sweden Photo Two",
  // },
  // {
  //   url: '	https://fatoura.work/assets/images/section3.3.svg',
  //   alternativeText: "Sweden Photo Three",
  // }
];

const HomPage = () => {
  return (
    <div>
        <div className='mt-6'>
          <div className='flex flex-col p-4'>
            <h1 className='flex justify-center font-bold text-xl mb-8'>Invoicing made simple</h1>
            <h1 className='flex justify-center text-5xl mb-12'>Use Fatoura and win back your time</h1>
            <div className='flex justify-center p-4 '>
              <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded font-bold w-[250px] p-4 bgcolor text-white rounded-2xl'>See All Feature</button>
              <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded font-bold rounded-2xl w-[150px]'>Start Now</button>
            </div>
          </div>
          <div className=' flex justify-center '>
            <img src="https://clarify-app-8u77.vercel.app/static/media/home.cb9fada3f93c596d90f9.png" className='w-[1230px]' alt="" />
            </div>
            <div className='flex justify-center items-center p-6 '>
            <div className='md:w-1/2 w-full mx-auto'>
              <img src="https://fatoura.work/assets/images/section2.svg" className='img'alt="" />
            </div>
              <div className='flex justify-end flex-col items-end item'>
              <h1 className='mb-6 text-xl Gilroy-Bold flex items-center font-bold  justify-end font-bold rtl:left-0 ltr:right-0'>Fast and Secure</h1>
              <div className='flex flex-col justify-end flex flex-col ltr:text-right mt-8 md:w-3/4 w-full max-width'>
              <h1 className='text-5xl mb-8 font-bold Gilroy-ExtraBold leading-tight flex justify-end'>Manage Invoices Securely with Ease</h1>
              </div>
              <h1 className='text-2xl Gilroy-Bold font-bold  leading-tight max-width'>Fatoura.work was built to serve freelancers and business owners with a complete suite of invoicing & payment tools to advance their business.</h1>
              <h1 className='text-2xl Gilroy-Bold font-bold  leading-tight mt-2 mb-4 max-width '>Invoicing & Payments Every feature is geared towards accurate and secure invoicing and getting you paid.</h1>
              <button className='font-bold m-2 border border-slate-300 p-2 w-24 rounded font-bold rounded-2xl w-[150px]'>Start Now </button>
            </div>
            
        </div>
        <div>
          <h1 className='mx-32 mb-4 font-bold text-xl'>  
            Features
          </h1>
          <h1 className='flex justify-center font-bold text-6xl mb-6'>Create Your Own Customize Invoice</h1>
        </div> 

    <div className='flex'>
      
      <Swiper
        id="main"
        className='flex w-[1340px]'
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        
        onReachEnd={() => console.log("Swiper end reached")}
      >
        
        <div className='flex'>
          
        
        {images.map((photo, index) => (
          <div className='flex'>
          <SwiperSlide key={index}>
            <img
              src={photo.url}
              alt={photo.alternativeText}
              style={{ width: "500px", display:"flex" }}
              className='flex'
            />
          </SwiperSlide>
          </div>
        ))}
         
        </div>
        
      </Swiper>
    </div>
        </div>
    </div>
  )
}

export default HomPage