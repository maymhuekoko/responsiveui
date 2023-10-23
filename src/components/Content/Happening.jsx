import React from 'react'
import background1 from '../../images/img2.jpg'
import background2 from '../../images/img6.jpg'
import background3 from '../../images/img4.jpg'
import background4 from '../../images/img8.jpg'
import background5 from '../../images/img9.jpg'
import {AiOutlineClockCircle} from 'react-icons/ai'

export default function Happening() {
  return (
    <>
    <h1 className=' md:px-52 px-10 text-2xl font-semibold mt-2'>HAPPENING NOW</h1>
    <div className=' flex flex-col md:flex-row  md:px-52 px-10 md:space-x-5'>
        <div className=' md:w-2/3  flex flex-col'>
        <div class="relative mt-6">
        <img src={background1} className=' md:h-96 h-72 w-full rounded-lg'/>
        <h3 class="absolute text-2xl text-white top-5 left-5">CITY</h3>
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2">
        <h1 className=' text-lg font-semibold text-white'>Article Title</h1>
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
        <div class="relative mt-6">
        <img src={background3} className=' md:h-96 h-72 w-full rounded-lg'/>
        <h3 class="absolute text-2xl text-white top-5 left-5">CITY</h3>
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2">
        <h1 className=' text-lg font-semibold text-white'>Article Title</h1>
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
        <div className='flex flex-col'>
        <img src={background2} className=' h-40 rounded-lg mt-6'/>
        <h1 className=' text-lg font-semibold'>Article Title</h1>
        <div className=' flex text-gray-400 items-center'>
        <AiOutlineClockCircle/>
        <h1 className=' ml-2'>2 min ago</h1>
        </div>
        <img src={background4} className=' h-40 rounded-lg mt-6'/>
        <h1 className=' text-lg font-semibold'>Article Title</h1>
        <div className=' flex text-gray-400 items-center'>
        <AiOutlineClockCircle/>
        <h1 className=' ml-2'>2 min ago</h1>
        </div>
        <img src={background5} className=' h-40 rounded-lg mt-6'/>
        <h1 className=' text-lg font-semibold'>Article Title</h1>
        <div className=' flex text-gray-400 items-center'>
        <AiOutlineClockCircle/>
        <h1 className=' ml-2'>2 min ago</h1>
        </div>
        </div>
    </div>
    </>
  )
}
