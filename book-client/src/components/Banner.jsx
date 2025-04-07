import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* Left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books
            <span className='text-blue-700'> for the Best Prices</span></h2>
            <p className='md:w-4/5'>Books are important for the mind, heart, and soul. But don't 
            take it from us .From applied literature to educational resources, we have a 
            lot of textbooks to offer you. We provide only the best books for you.</p>
            <div>
              <input type="search" name="search" id="seaarch" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

        {/* Right side */}
        <div>
            <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner