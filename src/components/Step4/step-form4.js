//Importing necessary components
import React from 'react';
import StepSection from './Form-Body4';
import FormHeaderFour from './Form-Header4';
import FormFive from '../Step5/step-form5';
import ContinueButton from '../Button';


const StepForm = () => {
 //useState for handling click event on the options
  //Initially none of the options are selected
  const [activeContainer, setActiveContainer] = React.useState(null); 

  //useState for handling step completed
  //Initially the step is not completed so the state is set to false
  const [stepCompleted, setStepCompleted] = React.useState(false); 


  const handleContainerClick = (containerId) => {
    setActiveContainer(containerId); // Set the clicked option as the active one
  };

  const handleContinue = () => {
    if (activeContainer) {
      setStepCompleted(true); // Mark the step as completed
    }
  };

  if (stepCompleted) {
    // Render the next component when the step is completed
    return <FormFive />;
  }

  return (
    <main>
      <FormHeaderFour /> {/*Header component for the fourth step*/}

      <StepSection  /*Step component for the fourth step*/
        activeContainer={activeContainer}
        handleContainerClick={handleContainerClick}
      />

      <ContinueButton  /*Continue button component*/
        activeContainer={activeContainer}
        handleContinue={handleContinue}
      />

    </main>
  );
};

export default StepForm;


