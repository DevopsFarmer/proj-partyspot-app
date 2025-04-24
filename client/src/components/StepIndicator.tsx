interface Step {
  id: number;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="flex mb-6 overflow-x-auto pb-2">
      {steps.map((step) => (
        <div
          key={step.id}
          className="step-indicator flex-shrink-0 flex flex-col items-center mr-8"
        >
          <div
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-1 ${
              step.id === currentStep
                ? "border-gold bg-gold text-white"
                : step.id < currentStep
                ? "border-purple bg-purple text-white"
                : "border-gray-300 text-gray-600"
            }`}
            data-step={step.id}
          >
            <span className="font-medium">{step.id}</span>
          </div>
          <span className="text-xs text-gray-600">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
