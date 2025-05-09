import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
      </div>

      <div className='md:w-1/2'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite 
        <span className='text-blue-700'> Book Here!</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>We don't need to have just one favorite. 
        We keep adding favorites. Our favorite book is always the book that speaks most directly 
        to us at a particular stage in our lives. And our lives change. We have other favorites 
        that give us what we most need at that particular time. But we never lose the old 
        favorites. They're always with us. We just sort of accumulate them.</p>
        
        {/* stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>100+</h3>
            <p>Book Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>300+</h3>
            <p>Register Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>500+</h3>
            <p>PDF Downloads</p>
          </div>
        </div>

        <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 
        rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default FavBook