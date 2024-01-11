import React from "react";
import Stepper from "./components/Stepper";

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = 5;

  const goToNextStep = () => setCurrentStep(prev => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () => setCurrentStep(prev => (prev <= 0 ? prev : prev - 1));

  return (
    <div>
      <h1 className="text-2xl">Stepper actions!</h1>
      <br />
      <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
      <br />
      <section className="flex gap-10">
        <button onClick={goToPreviousStep} className="bg-green-500 text-white p-2 rounded-md">
          Previous
        </button>
        <button onClick={goToNextStep} className="bg-green-500 text-white p-2 rounded-md">
          Next
        </button>
      </section>
    </div>
  );
};

export default App;
