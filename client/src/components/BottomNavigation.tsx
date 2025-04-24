import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

const BottomNavigation = () => {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (location === "/") {
      setActiveTab("home");
    } else if (location.includes("/events")) {
      setActiveTab("explore");
    } else if (location === "/profile") {
      setActiveTab("profile");
    } else if (location.includes("/party-pass")) {
      setActiveTab("pass");
    }
  }, [location]);

  return (
    <nav className="bg-white border-t border-gray-200 py-2 shadow-md fixed bottom-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          <Link href="/">
            <button className={`flex flex-col items-center p-2 ${activeTab === "home" ? "text-purple" : "text-gray-500"}`}>
              <i className="fas fa-home text-xl"></i>
              <span className="text-xs mt-1">Home</span>
            </button>
          </Link>
          
          <Link href="/events/curated">
            <button className={`flex flex-col items-center p-2 ${activeTab === "explore" ? "text-purple" : "text-gray-500"}`}>
              <i className="fas fa-search text-xl"></i>
              <span className="text-xs mt-1">Explore</span>
            </button>
          </Link>
          
          <Link href="/party-pass">
            <button className={`flex flex-col items-center p-2 ${activeTab === "pass" ? "text-purple" : "text-gray-500"}`}>
              <i className="fas fa-ticket-alt text-xl"></i>
              <span className="text-xs mt-1">PartyPass</span>
            </button>
          </Link>
          
          <Link href="/profile">
            <button className={`flex flex-col items-center p-2 ${activeTab === "profile" ? "text-purple" : "text-gray-500"}`}>
              <i className="fas fa-user text-xl"></i>
              <span className="text-xs mt-1">Profile</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
