import ProgressBar from '../ProgressBar'; //Importing progress bar component
import Header from '../Header'; //Importing header component
import React from 'react';
import PreviousButton from '../PreviousButton';
import {Link} from 'react-router-dom';
const FormHeaderTwo = () => {
    return(
        <div className="m-8 w-5/6 mx-auto"> {/*Horizontally centers the container*/}
         <Link to="/"><PreviousButton /></Link>
            
            <ProgressBar 
                initialProgress={25} //Progress set to 25%
            />

            <Header 
                h1="Which are you most interested in?"
                p="Choose just one. This will help us get you started (but won't limit your experience)."
                pClassName={"text-center"} //class for the p text
                hClassName={"text-center"} //class for the h1 text
            />

        </div>
      
    )
}
export default FormHeaderTwo