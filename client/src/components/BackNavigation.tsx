interface BackNavigationProps {
  title: string;
  onBack: () => void;
}

const BackNavigation = ({ title, onBack }: BackNavigationProps) => {
  return (
    <div className="flex items-center mb-6">
      <button
        className="mr-2 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100"
        onClick={onBack}
      >
        <i className="fas fa-arrow-left text-gray-600"></i>
      </button>
      <h2 className="text-2xl font-poppins font-semibold">{title}</h2>
    </div>
  );
};

export default BackNavigation;
