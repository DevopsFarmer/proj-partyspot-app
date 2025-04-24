import { Link } from "wouter";
import Logo from "./ui/logo";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const Header = ({ title, showBackButton = false, onBack }: HeaderProps) => {
  return (
    <header className="gradient-bg text-white shadow-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        {showBackButton ? (
          <div className="flex items-center">
            <button onClick={onBack} className="mr-2">
              <i className="fas fa-arrow-left"></i>
            </button>
            <h1 className="text-xl font-poppins font-bold">{title || "PartySpot"}</h1>
          </div>
        ) : (
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Logo className="mr-2" />
              <h1 className="text-xl font-poppins font-bold">{title || "PartySpot"}</h1>
            </div>
          </Link>
        )}
        <div>
          <button className="p-2">
            <i className="fas fa-bell"></i>
          </button>
          <Link href="/profile">
            <button className="ml-2 p-2">
              <i className="fas fa-user-circle text-xl"></i>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
