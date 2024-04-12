import ProgressBar from '../ProgressBar'; //Importing progress bar component
import Header from '../Header'; //Importing header component

export default function FormHeaderOne(){
    return(
        <div className="m-8 w-5/6 mx-auto"> {/*Horizontally centers the container*/}

            <ProgressBar 
                initialProgress={10} //Initial progress set to 10%
            />

            <Header 
                h1="Which describes you best?"
                p="This will help us personalize your experience."
                pClassName={"text-center"} //class for the p text
                hClassName={"text-center"} //class for the h1 text
            />

        </div>
    )
}