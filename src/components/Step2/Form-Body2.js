//Importing images necessary for the first step of the form
import LearningImage from '../../images/learning_skills.png';
import ExploringImage from '../../images/exploring_topics.png';
import RefreshingImage from '../../images/refreshing_foundation.png';
import ExercisingImage from '../../images/exercising_brain.png';
import ElseImage from '../../images/something_else.png';

import StepContainer from '../step-container';
// StepSection Component
const StepSection = ({ activeContainer, handleContainerClick }) => {
    // Define step data for each container
    const steps = [
      {
        id: 'learning',
        src: LearningImage,
        category: '',
        description: 'Learning specific skills to advance my career',
      },
      {
        id: 'exploring',
        src: ExploringImage,
        category: '',
        description: "Exploring new topics I'm interested in",
      },
      {
        id: 'refreshing',
        src: RefreshingImage,
        category: '',
        description: 'Refreshing my math foundation',
      },
      {
        id: 'exercising',
        src: ExercisingImage,
        category: '',
        description: 'Exercising my brain to stay sharp',
      },
      {
        id: 'else',
        src: ElseImage,
        category: '',
        description: 'Something else',
      },

    ];
  
    return (
      //Using different margin left styles for different screen sizes to achieve responsive desgin.
      <section className='lg:ml-[0%] md:ml-[-10%] sm:ml-[-20%] ml-[-40%]'>
        
        {steps.map((step) => ( //For each options in this step display the options
          <StepContainer
            key={step.id}
            src={step.src}
            category={step.category}
            description={step.description}
            onClick={() => handleContainerClick(step.id)} //Handles clicking the option
            isActive={activeContainer === step.id} //Checks if the option is clicked and sets it to active
          />
        ))}

      </section>
    );
  };
  
  export default StepSection;