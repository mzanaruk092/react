import React, { useState } from 'react'
import {FaBars, FaTimes,FaGithub,FaSteamSquare, FaFacebook,FaInstagram} from 'react-icons/fa';
import Logo1 from '../assets/logom.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between item-center px-2 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo1} alt="Lofo Image" style={{width: '150px'}}/>
        </div>

        {/*menu */}
            <ul className='hidden md:flex text-2xl items-center'>
                <li>
                    <Link  to='home' smooth={true} duration={500}>
                    Home
                    </Link>
                </li>
                <li><Link  to='about' smooth={true} duration={500}>
                    About
                    </Link></li>
                <li>
                <Link  to='skills' smooth={true} duration={500}>
                        Skills
                 </Link>
                </li>
                <li>
                <Link  to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                <Link  to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        
        {/*click*/}
        <div onClick = {handleClick} className='md:hidden z-10 flex justify-between items-center h-[80px]'>
            {!nav ? <FaBars />: <FaTimes />}
        </div>

        {/*Mobile munu*/}
        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}  to='contact' smooth={true} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>
        
        {/*social icon*/}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold'
                     href="https://www.facebook.com/theptat.keawkanda">
                        FaceBook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-stone-700'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold'
                     href="https://github.com/mzanaruk092/Powermza.git">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold'
                     href="https://steamcommunity.com/profiles/76561198331236828/">
                        Steam <FaSteamSquare size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold'
                     href="https://www.instagram.com/ttk_theptat/">
                           Instagram <FaInstagram size={30}/>
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar