import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'
import { MdClose, MdMenu } from 'react-icons/md'
import { FaCartShopping } from 'react-icons/fa6'
import Logout from '../assets/logout.svg'
import User from '../assets/user.svg'

const Header = () => {

    const [menuOpen, setMenuOpened] = useState(false)
  return (
    <header className='fixed top-0 left-0 m-auto  w-full bg-white ring-1 ring-slate-900/5 z-10 '>
        <div className='px-4 flex items-center justify-between py-3 max-xs:px-2'>
            {/*Logo*/}
            <div>
                <Link>
                    <img src={logo} alt='' height={66} width={60}/>
                </Link>
            </div>
            <Navbar containerStyles={'hidden md:flex gap-x-5 xl:gap-x-10'}/>

            <Navbar containerStyles={`${menuOpen ? 'flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300' : 'flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]'}`}/>
            
            <div className='flexBetween sm:gap-x-6 bold-16'>
                <button onClick={() => setMenuOpened(!menuOpen)}>
                    {!menuOpen ? (
                        <MdMenu className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full'/>
                        ) : (
                        <MdClose className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full'/>)
                    }
                </button>

                <NavLink 
                    to='/cart' 
                    className='flex'>
                    <FaCartShopping 
                        className='p-1 h-8 w-8'
                    />
                    <span 
                        className='relative flexCenter w-5 h-5 bg-secondary rounded-full text-white medium-14 -top-2'>
                        0
                    </span>
                </NavLink>
                
                <NavLink 
                    to='/logout' 
                    className='btn_secondary_rounded flexCenter gap-x-2 medium-15'>
                    <img src={Logout} height={19} width={19}/>
                    Logout
                </NavLink>

                <NavLink 
                    to='/login' 
                    className='btn_secondary_rounded flexCenter gap-x-2 medium-15'>
                    <img src={User} height={19} width={19}/>
                    Login
                </NavLink>

            </div>
        </div>
    </header>
  )
}

export default Header