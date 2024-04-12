//Importing necessary components
import React from 'react';
import StepSection from './Form-Body1';
import FormHeaderOne from './Form-Header1';
import FormTwo from '../Step2/step-form2';
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
    return <FormTwo />;
  }

  return (
    <main>
      <FormHeaderOne /> {/*Header component for the first step*/}

      <StepSection /*Step component for the first step*/
        activeContainer={activeContainer}
        handleContainerClick={handleContainerClick}
      />

      <ContinueButton /*Continue button*/
        activeContainer={activeContainer}
        handleContinue={handleContinue}
      />

    </main>
  );
};

export default StepForm;


