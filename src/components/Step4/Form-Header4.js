import ProgressBar from '../ProgressBar';
import Header from '../Header';
import PreviousButton from '../PreviousButton';
import {Link} from 'react-router-dom';

export default function FormHeaderFour(){
    return(
        <div className="m-8 sm:w-5/6 mx-auto w-full">
            <Link to="/step3"><PreviousButton /></Link>
            <ProgressBar 
                initialProgress={60}
            />

            <Header 
                h1="What is your math comfort level?"
                p="Choose the highest level you feel confident in - you can alway adjust later."
                pClassName={"text-center"}
                hClassName={"text-center"}
            />
            
        </div>
    )
}