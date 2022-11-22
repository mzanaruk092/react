import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name= 'home' className='w-full h-screen bg-[#0a192f]'>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-blue-500'>Hi, My Name Is</p>
          <h1 className='text-4xl sm:text-4xl font-bold text-[#ccd6f6]'>MR.Theptat Keawkanda</h1>
          <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>I'm IT SUPPORT/SOFTWARE TESTER. </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm Vender in thaihonda manufacturing Department : NIDS SUPPORT . My Company name Customer Engineering service co.ltd.
             I'm responsible on my job give counsel user to use WebApp and Document problem at user To 
            request programmer  improvement  to user require and take care of information equipment In Company.</p>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Finally, I want to work on programmers. Please Give Me Join Your Team I'll try my best.</p>
          <div> <Link  to='work' smooth={true} duration={500}>
               <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-pink-600' >View Work 
        
                 <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Home