//Importing necessary components
import Header from '../Header';
import React, {useState} from 'react'
import LearningPathContainer from './path-container';

export default function LearningRecommendations(){
    const [activeContainer, setActiveContainer] = useState(null);
        const handleContainerClick = (containerId) => {
            
            if (activeContainer === containerId) {
            // Clicking the same container again should deselect it
                setActiveContainer(null);
            } 

            else {
            // Clicking a different container should select it
                setActiveContainer(containerId);
            }
        };

    return(
        <div className="justify-center items-center w-10/12 mx-auto">

            {/*Aligning the header component to center of the webpage*/}
            <div className='sm:w-10/12 w-full mx-auto mt-40 text-center mb-12'>
                <Header 
                    h1="Learning paths based on your responses"
                    p="Choose one to get started. You can switch anytime."
                />
            </div>
            
            {/*For large screens the display is flex while for others it is block*/}
            <div className='lg:flex block w-10/12 mx-auto gap-3 relative'>
                
                {/*Learning path container component*/}
                <LearningPathContainer 
                    Path="Foundational Math"
                    Detail="Build your foundational skills in algebra, geometry, and probability."
                    isActive={activeContainer === 'foundationalMath'}
                    onClick={() => handleContainerClick('foundationalMath')}
                />
                
                {/*Most popular tag*/}
                <div className='w-32 rounded-2xl text-xs py-2 bg-yellow-500 absolute lg:top-1/5 lg:left-1/4  sm:ml-[37%] md:mt-[-31%] sm:mt-[-38%] mt-[-54%] ml-[50%] lg:ml-[0%] lg:mt-[0%] transform -translate-x-1/2 -translate-y-1/2 text-center text-black-500 font-bold'>
                    MOST POPULAR
                </div>

                {/*Learning path container component*/}
                <LearningPathContainer 
                    Path="Mathematical Thinking"
                    Detail="Build your foundational skills in algebra, geometry, and probability."
                    isActive={activeContainer === 'mathematicalThinking'}
                    onClick={() => handleContainerClick('mathematicalThinking')}
                />

            </div>
            
        </div>
    )
}