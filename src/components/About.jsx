import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className=' flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>
                      About
                    </p>
                </div>
                <div></div>
            </div>
            <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4' >
              <div className=' sm:text-right text-xl font-bold'>
                <p>Hi. I'm M, Nice to meet you.</p>
                <p>I'm 25 YearOld. I'm graduated with a bachelor’s degree in Computer science from Rajamangala University of Technology Phra Nakhon.</p>
              </div>
              <div>
                <p>My favorite look like to travel on sea in thailand and camping. I'm very love to playing Dota2 or another games on steam . Freetime I'm ride to bigbike traval in bangkok and lerning programingto develop oneself.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About