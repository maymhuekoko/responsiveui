import React from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
import {AiOutlineClockCircle} from 'react-icons/ai'
import background from '../../images/img7.jpg'

export default function News() {
  return (
    <div className=' flex flex-col md:flex-row bg-white'>
        <div class=" md:w-2/3 relative ">
        <img src={background} className=' h-96 w-full'/>
        <div className=' absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className=' font-bold text-2xl'>MORE NEWS</h1>
            <hr className=' mt-5 text-white'/>
            <div className=' flex flex-col mt-5'>
                <h1 className=' md:text-xl text-lg text-white'>Amazing Places in America to visit</h1>
                <h1 className=' text-sm text-white'>For some reason - this country,this city and this particular street - is the place you are living a majority of your live in.</h1>
            </div>
            <button className=' px-5 py-2 bg-red-500 text-white text-lg rounded-lg'>
                LEARN MORE
            </button>

        </div>
        </div>
    
        
        <div className=' w-full md:w-96 lg:w-96 p-4 '>
            <div className=' flex justify-between'>
                <h1 className=' font-bold text-2xl'>MORE NEWS</h1>
                <div className=' flex items-center space-x-3 text-lg'>
                    <IoIosArrowBack className=' text-gray-400'/>
                    <IoIosArrowForward/>
                </div>
            </div>
            <hr className=' mt-5'/>
            <div className=' flex flex-col mt-5'>
                <h1 className=' text-xl text-red-600'>TRAVEL</h1>
                <h1 className=' text-lg font-semibold'>Article Title</h1>
                <p className=' text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quibusdam, dolore praesentium?
                </p>
                <div className=' flex text-gray-400 items-center'>
                <AiOutlineClockCircle/>
                <h1 className=' ml-2'>2 min ago</h1>
                </div>
            </div>
            <div className=' flex flex-col mt-5'>
                <h1 className=' text-xl text-red-600'>TECHNOLOGY</h1>
                <h1 className=' text-lg font-semibold'>Article Title</h1>
                <p className=' text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quibusdam, dolore praesentium?
                </p>
                <div className=' flex text-gray-400 items-center'>
                <AiOutlineClockCircle/>
                <h1 className=' ml-2'>2 min ago</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
