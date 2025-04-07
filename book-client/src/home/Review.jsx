import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// react icons
import {FaStar} from "react-icons/fa6";
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg"
import proPic1 from "../assets/profile1.jpeg"
import proPic2 from "../assets/profile2.jpeg"
import proPic3 from "../assets/profile3.jpeg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>"Had an amazing experience with this company. 
                    The customer service was outstanding, and the product was exactly what I 
                    was looking for.” “I was so pleased with the service I received from this 
                    business. They went above and beyond to help me find the perfect item.”</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Zara Khan</h5>
                    <p className='text-base'>Web Designer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>I wanted to buy a book so I checked most of the stores 
                    near my area but didn't find it; Then a friend of mine told me about one 
                    website "Bookie", I went to the website and got the book I wanted; 
                    The books pacaking are too good; a 5 star from me; you guys deserves it;</p>
                    <Avatar img={proPic1} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Hemant Singh</h5>
                    <p className='text-base'>Author</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>I think this is a very good website for book lovers like 
                    me. We can get various kinds of books from here.But here I get easily. We can get all types of
                    books like Political, Business related and also sports books are available 
                    with huge optiions. Thanks "Bookie".</p>
                    <Avatar img={proPic3} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>Manager</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>I am very fond of reading books. So I frequently visit 
                    book stores offline. But the best online book store I have come across is 
                    "Bookie". Not only because it is one of the best book stores but also it's 
                    collection of books. You can easily find the book you want in this store.</p>
                    <Avatar img={proPic2} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Aarav Rao</h5>
                    <p className='text-base'>Journalist</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review