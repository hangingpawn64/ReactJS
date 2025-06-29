import React from 'react'
import './Theme.css'

const Theme = () => {
  return (
    <nav className='flex justify-between text-white py-4 pt-7'>
      <div className="logo">
        <span className="font-bold text-xl mx-9"> Get It Together</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='circle light cursor-pointer hover:shadow-[0_0_10px_theme(colors.blue.500)] transition-shadow duration-300  border border-black '></li>
        <li className='circle gradient  cursor-pointer hover:shadow-[0_0_10px_theme(colors.blue.500)] transition-shadow duration-300 border border-white'></li>
        <li className='circle dark cursor-pointer hover:shadow-[0_0_10px_theme(colors.blue.500)] transition-shadow duration-300 border border-white'></li>
      </ul>
    </nav>
  )
}

export default Theme
