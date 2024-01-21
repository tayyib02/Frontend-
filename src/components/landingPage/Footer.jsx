import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <div className=' relative h-[10rem] '>

      <div className='flex gap-5 absolute left-0 bottom-0 mb-5 text-zinc-500 text-sm'>
        <div className='ml-10'>Copyright © 2023 liteJob Ltd. All Rights Reserved.</div>
        <div className='hover:text-black'><Link to='/terms'>Terms & Conditions</Link></div>
        <div className='hover:text-black'><Link to='/about'>About</Link></div>
        <div className='hover:text-black'><Link to='/help'>Help</Link></div>
        <div className='hover:text-black'><Link to='/privacy'>Privacy Policy</Link></div>        
      </div>

    </div>
  )
}

export default Footer