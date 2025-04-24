interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`rounded-xl overflow-hidden w-10 h-10 flex items-center justify-center bg-white ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L14 7H20L22 14H2L4 7H10L12 4Z" fill="#A044FF" />
        <path d="M8 10L10 13L12 10L14 13L16 10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
        <circle cx="5" cy="7" r="1.5" fill="#FFD700" />
        <circle cx="19" cy="7" r="1.5" fill="#FFD700" />
        <path d="M9 16L8 20H16L15 16" fill="#A044FF" />
      </svg>
    </div>
  );
};

export default Logo;
