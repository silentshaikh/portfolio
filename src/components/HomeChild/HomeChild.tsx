'use client';
import React, { useEffect, useRef } from 'react'
// import { FaInstagram } from "react-icons/fa6";
// import { LuFacebook } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
// import moizCv from '../moiz.pdf'
import Typed from 'typed.js';
import Link from 'next/link';
function HomeChild() {
    const typRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typRef.current, {
    strings: ["FRONT-END-DEVELOPER"],
    typeSpeed: 50,
    backSpeed:70,
      loop:true,
  });
return () => {
    typed.destroy()
}
    },[]);
    
  return (
    <section className='flex justify-center items-center flex-col h-screen pl-[250px] z-foot max-[1070px]:pl-0'>
    <div className="flex   p-2">
        <Image className='size-72 rounded-full shadow-inshad p-3 '
         src='/images/Snapchat-1599503129.jpg'
          alt="profile"
          height={270} 
          width={270}
          />
    </div>
    <h1 className='text-[3.5rem] font-bold pt-2 max-[1070px]:text-[2.5rem]'>SHAIKH ABDUL MOIZ</h1>
        <div className="flex">
        <h3 className='text-4xl text-teal-400 font-bold pb-4 max-[1070px]:text-2xl' ref={typRef}></h3>
        {/* <h3 className='text-4xl text-teal-400 font-bold pb-4 max-[1070px]:text-2xl'>Front-End-Developer</h3> */}
        </div>
        <Link target='_blank' href={'/cv/White and Green Simple Student CV Resume.pdf'}><button className='shadow py-3 px-7 hover:text-teal-300 hover:shadow-inshad'>Download CV</button></Link>
        <div className="flex mt-10 shadow py-3 px-8">
        {/* <LuFacebook className='text-[2.6rem] text-teal-300 shadow ml-2 p-2 hover:shadow-inshad'/> */}
        {/* <FaInstagram className='text-[2.6rem] text-teal-300 shadow ml-2 p-2 hover:shadow-inshad'/> */}
        <Link target='_blank' href='https://www.linkedin.com/in/abdul-moiz-644401241/'>
        <FaLinkedin className='text-[2.6rem] text-teal-300 shadow ml-2 p-2 hover:shadow-inshad'/>
        </Link>
        </div>
    </section>
  )
}

export default HomeChild