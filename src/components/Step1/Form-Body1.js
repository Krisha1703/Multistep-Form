//Importing images necessary for the first step of the form
import StudentImage from '../../images/student.png';
import ProfessionalImage from '../../images/professional.png';
import ParentImage from '../../images/parent.png';
import LearnerImage from '../../images/learner.png';
import TeacherImage from '../../images/teacher.png';
import OtherImage from '../../images/other.png';

import StepContainer from '../step-container';
// StepSection Component
const StepSection = ({ activeContainer, handleContainerClick }) => {
    // Define step data for each container
    const steps = [
      {
        id: 'student',
        src: StudentImage,
        category: 'Student',
        description: 'or soon to be enrolled',
      },
      {
        id: 'professional',
        src: ProfessionalImage,
        category: 'Professional',
        description: 'pursuing a career',
      },
      {
        id: 'parent',
        src: ParentImage,
        category: 'Parent',
        description: 'of a school-age child',
      },
      {
        id: 'learner',
        src: LearnerImage,
        category: 'Lifelong learner',
        description: '',
      },
      {
        id: 'teacher',
        src: TeacherImage,
        category: 'Teacher',
        description: '',
      },
      {
        id: 'other',
        src: OtherImage,
        category: 'Other',
        description: '',
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