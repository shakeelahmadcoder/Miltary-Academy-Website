import React, { useState } from 'react'
import { CiClock2, CiLocationOn, CiSearch } from 'react-icons/ci'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiAlignJustify } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [showNav, setshowNav] = useState(false)
  return (
    <div  className='mx-auto '>
      {/* top nav  */}
      <div className="top flex sm:px-20 justify-center items-center gap-4 text-sm py-2 flex-col sm:flex-row sm:justify-between">
        {/* for logo  */}
        <div className="logo flex items-center gap-3">
          <img className='h-10 w-10' src="logo.png" alt="" />
          <div>
            <p className='text-2xl font-bold'>Miltary</p>
            <p className='text-gray-600'>School</p>
          </div>
        </div>

        {/* location  */}
        <div className="location flex items-center gap-2">
        <CiLocationOn className='text-orange-500 text-xl font-bold' />
        <p>267 Park Avenue New York, NY 90210 </p>
        </div>
        {/* time  */}
        <div className="time flex items-center gap-2">
        <CiClock2 className='text-orange-500 text-xl font-bold' />
        <p>Sunday: 9:00 AM Sunday: 11:15 AM</p>
        </div>
        {/* button  */}
        <div>
        <button className="border-2  border-orange-500 text-orange-500 uppercase  font-bold py-2 px-8 hover:bg-orange-500 hover:text-white transition-all duration-300">
  Appointment
</button>
        </div>
      </div>

      {/* Navigation bar  */}
      <nav className='bg-navy px-6 sm:px-20 py-2 justify-end hidden sm:flex sm:justify-between items-center flex-col sm:flex-row relative'>
     <div className="links text-white flex gap-12 font-bold ">
     <Link to="/" className="uppercase hover:text-orange-500">Home</Link>
      <Link to="/about" className="uppercase hover:text-orange-500">About</Link>
      <Link to="/blog" className="uppercase hover:text-orange-500">Blog</Link>
      <Link to="/gallery" className="uppercase hover:text-orange-500">Gallery</Link>
      <Link to="/contact" className="uppercase hover:text-orange-500">Contact</Link>
     </div>
      <form className='relative'>
      <input type="text" placeholder='Search' className='outline-none focus:outline-none px-6 py-2'/>
      <button className='absolute top-0 right-0 text-4xl'><CiSearch /></button>
     </form>
     {/* <FiAlignJustify className='text-4xl text-white cursor-pointer sm:hidden absolute top-2 right-2' /> */}
      </nav>
      
      {/* Navigation bar for phone  */}
      <nav className='bg-navy px-6 sm:px-20 py-4 justify-end flex  items-center flex-col sm:hidden relative '>
     {/* <FiAlignJustify className='text-4xl text-white cursor-pointer sm:hidden absolute top-2 right-2' /> */}
     <div className='md:hidden'>
                <button onClick={()=> setshowNav(!showNav)}>
                    {showNav? <FaTimes className='text-4xl text-white cursor-pointer sm:hidden absolute top-2 right-2'/>: <FaBars className='text-4xl text-white cursor-pointer sm:hidden absolute top-2 right-2'/>}
                </button>
            </div>
     {showNav && 
     <div>
     <div className="links text-white flex gap-6 items-center font-bold flex-col">
      <Link to="/" className="uppercase hover:text-orange-500">Home</Link>
       <Link to="/about" className="uppercase hover:text-orange-500">About</Link>
       <Link to="/blog" className="uppercase hover:text-orange-500">Blog</Link>
       <Link to="/gallery" className="uppercase hover:text-orange-500">Gallery</Link>
       <Link to="/contact" className="uppercase hover:text-orange-500">Contact</Link>
      </div>
       <form className='relative my-5'>
       <input type="text" placeholder='Search' className='outline-none focus:outline-none px-6 py-2'/>
       <button className='absolute top-0 right-0 text-4xl'><CiSearch /></button>
      </form>
     </div>
     }
    

      </nav>

    </div>

  )
}

export default Navbar