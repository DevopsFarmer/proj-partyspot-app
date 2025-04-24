import { useRoute, useLocation } from "wouter";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import BackNavigation from "@/components/BackNavigation";
import EventCard from "@/components/EventCard";
import { weddingEvents, birthdayEvents } from "@/utils/categoryData";

const EventSelection = () => {
  const [match, params] = useRoute("/events/:category");
  const [_, setLocation] = useLocation();
  const category = params?.category || "";

  const handleBack = () => {
    setLocation("/");
  };

  const getTitle = () => {
    switch (category) {
      case "wedding":
        return "Wedding Events";
      case "birthday":
        return "Birthday Events";
      case "curated":
        return "Curated Events";
      default:
        return "Select Event";
    }
  };

  // We'll handle curated events redirect in a useEffect
  useEffect(() => {
    if (category === "curated") {
      setLocation("/events/curated");
    }
  }, [category, setLocation]);
  
  const getEvents = () => {
    switch (category) {
      case "wedding":
        return weddingEvents;
      case "birthday":
        return birthdayEvents;
      default:
        return [];
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="fade-in">
          <BackNavigation title={getTitle()} onBack={handleBack} />

          <p className="text-gray-600 mb-6">
            Select the type of {category} event you want to organize
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getEvents().map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                subtitle={event.subtitle}
                imageSrc={event.imageSrc}
                linkTo={`/configure/${category}/${event.id}`}
              />
            ))}
          </div>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default EventSelection;
