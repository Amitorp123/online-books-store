import React from 'react'
import store from "../assets/book-store.jpeg";
import store1 from "../assets/store.jpg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
    <div className='md:w-1/2'>
      <img src={store} alt="" className='rounded md:w-10/12'/>
      <img src={store1} alt="" className='rounded md:w-10/12'/>
    </div>

    <div className='md:w-1/2'>
      <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>About Our Online
      <span className='text-blue-700 '> Bookstore</span></h2>
      <p className='mb-3 text-lg '>Bookie bookstore began as an idea to help support readers as 
      more and more people are buying their books online.We threatens the future of bookstores and 
      will hurt readers, authors, and publishers who rely on a diverse, healthy ecosystem for books.</p>
      <p className='mb-3 text-lg'>We give readers the convenience of online shopping while supporting 
      independent bookstores at the same time.</p>
      <p className='text-lg'>We launched in January of 2020, with just a team of four passionate book people. As the 
      COVID-19 pandemic surged, our growing platform helped our community of independent booksellers 
      survive shutdowns.By the end of 2023 we will almost grow to over many bookstores. 
      Bookie.org has since expanded internationally, launching in many states.</p>
      
      <Link to="#" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 
      rounded hover:bg-black transition-all duration-300'>Read More</button></Link>
    </div>
  </div>
  )
}

export default About