import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id , bookTitle , imageURL, authorName, bookDescription, category } = useLoaderData();
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between gap-12'>
      <div className='mt-5 px-4 lg:px-24'>
        <img src={imageURL} alt="" className='h-96'/>
      </div>

      <div className='md:w-1/2'>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white gap-2 mb-3">
          {bookTitle}
        </h1>
        <h1 className="text-3xl tracking-tight text-gray-900 dark:text-white gap-2 mb-5">
          {authorName}
        </h1>
        <div className='text-amber-500 flex gap-2 mb-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
          <h5 className='text-2xl'>4.2</h5>
          <h5>88 rating . 95 reviews</h5>
        </div>
        <p className="mb-3 text-lg mb-2">{bookDescription}</p>
        <h5 className='font-bold mb-5'>Category   <span className='text-green-500 underline'> {category} </span></h5>      
        <div>
          <h3 className='text-gray-500 font-bold'>380 pages, Hardcover</h3>
          <h3 className='text-gray-500 font-bold  mb-8 '>First published November 14, 2023</h3>
        </div>
        <Link to="/order"  className='block'>
        <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black
        transition-all duration-300'>Buy Now</button>
      </Link>
      </div>
      <div>
      </div>
    </div>
  )
}

export default SingleBook