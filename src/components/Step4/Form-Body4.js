//Importing images necessary for the first step of the form
import ArithmeticImage from '../../images/math1.png';
import AlgebraicImage from '../../images/math2.png';
import QuadraticImage from '../../images/math3.png';
import CalculusImage from '../../images/math4.png';

import MathStepContainer from './math-steps';
// StepSection Component
const StepSection = ({ activeContainer, handleContainerClick }) => {
    // Define step data for each container
    const steps = [
      {
        id: 'math1',
        src: ArithmeticImage,
        category: 'Arithmetic',
        width: 'w-[55%]',
        description: 'Introductory',
      },
      {
        id: 'math2',
        src: AlgebraicImage,
        width: 'w-[55%]',
        category: 'Basic Algenra',
        description: "Foundational",
      },
      {
        id: 'math3',
        src: QuadraticImage,
        width: 'w-[90%]',
        category: 'Intermediate Algebra',
        description: 'Intermediate',
      },
      {
        id: 'math4',
        src: CalculusImage,
        width: 'w-[55%]',
        category: 'Calculus',
        description: 'Advanced',
      },


    ];
  
    return (
       //Aliging items to center and using flex-wrap styles to achieve responsive desgin.
      <section className='flex flex-wrap justify-center items-center h-full'>

        {steps.map((step) => ( //For each options in this step display the options
          <MathStepContainer
            key={step.id}
            src={step.src}
            width={step.width}
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