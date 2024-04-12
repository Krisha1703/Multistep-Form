//Importing necessary components
import LearningPath from '../../images/path.png'
import React from 'react'

export default function LearningPathContainer({Path, Detail, isActive, onClick}){

    return(
        //Using different max-width and margin-bottom styles for different screen break points to achieve responsive design.
        //Rounded gray border around the path container
        //Path details and the image is displayed as flex
        <div className={`
            lg:w-[47%] cursor-pointer md:w-[70%] sm:w-[90%] lg:mb-[0%] mb-[5%] 
            w-full flex border border-gray-300 rounded-md p-6 
            ${isActive ? 'border-yellow-500 shadow-md' : ''}`} 
            onClick={onClick} //If the path conainer is clicked then yellow border with a shadwo appears
         >
            {/*Path details inside the container*/}
            <div className='flex flex-col'>
                <p className='text-md font-semibold'>
                    <span className='font-bold mr-1'>{Path}</span>
                    {Detail}
                </p>
            </div>

            <img src={LearningPath} className=' w-[35%] ml-5' alt="Learning Path"/>

        </div>
      
    )
}