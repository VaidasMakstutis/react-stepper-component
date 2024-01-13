import React from "react";
import Stepper from "./components/Stepper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = 5;

  const goToNextStep = () => setCurrentStep(prev => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () => setCurrentStep(prev => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-2xl text-center">Stepper actions</h1>
        <br />
        <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
        <br />
        <section className="flex justify-center gap-8">
          <button onClick={goToPreviousStep} className="bg-green-500 text-white p-2 rounded-md">
            <FaArrowLeft icon="fa-solid fa-arrow-left" />
          </button>
          <button onClick={goToNextStep} className="bg-green-500 text-white p-2 rounded-md">
            <FaArrowRight icon="fa-solid fa-arrow-right" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default App;
