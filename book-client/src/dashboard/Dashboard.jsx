import React from 'react';
import FavBookImg from "../assets/favoritebook.jpg";
import BannerCard from '../home/BannerCard';

const Dashboard = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
      </div>

      <div className='lg:w-[380px] shadow-2xl py-5 px-2 md:m-5 rounded-lg border mb-8 '>
        <div>
        <BannerCard/>
        </div>
        <h5 className='font-bold text-center bg-teal-200'> Total no. of books :</h5>
        <h3 className='font-bold text-center bg-teal-200'>11</h3>
      </div>
    </div>
  )
}

export default Dashboard