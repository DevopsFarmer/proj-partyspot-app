import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import BackNavigation from "@/components/BackNavigation";
import { Button } from "@/components/ui/button";
import { EventSummary as EventSummaryType } from "@/types/event";
import { apiRequest } from "@/lib/queryClient";
import { format } from "date-fns";

const EventSummary = () => {
  const [_, navigate] = useLocation();
  const [eventSummary, setEventSummary] = useState<EventSummaryType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Retrieve event summary from session storage
    const summaryData = sessionStorage.getItem("eventSummary");
    if (summaryData) {
      setEventSummary(JSON.parse(summaryData));
    } else {
      // If no data, redirect back to home
      navigate("/");
    }
  }, [navigate]);

  const handleBack = () => {
    navigate(`/configure/${eventSummary?.category}/${eventSummary?.eventType}`);
  };

  const handleConfirmBooking = async () => {
    if (!eventSummary) return;

    setIsLoading(true);
    try {
      // Here we would normally send this to the backend
      const response = await apiRequest("POST", "/api/events", {
        userId: 1, // For demo purposes - normally would be from auth
        category: eventSummary.category,
        eventType: eventSummary.eventType,
        date: eventSummary.date,
        invitees: eventSummary.invitees,
        venueType: eventSummary.venueType,
        foodPreferences: eventSummary.foodPreferences,
        specialInstructions: eventSummary.specialInstructions
      });

      if (response.ok) {
        const data = await response.json();
        // Update the booking reference from server response
        const updatedSummary = { ...eventSummary, bookingReference: data.bookingReference };
        sessionStorage.setItem("eventSummary", JSON.stringify(updatedSummary));
        navigate("/confirmation");
      }
    } catch (error) {
      console.error("Failed to confirm booking:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!eventSummary) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="fade-in">
          <BackNavigation title="Event Summary" onBack={handleBack} />

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
            <div className="mb-4 pb-4 border-b border-gray-100">
              <h3 className="text-xl font-poppins font-semibold text-purple-dark">
                {eventSummary.eventType.charAt(0).toUpperCase() + eventSummary.eventType.slice(1).replace('_', ' ')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="summary-item">
                <h4 className="text-sm text-gray-500 mb-1">Date</h4>
                <p className="font-medium">
                  {format(new Date(eventSummary.date), "MMMM dd, yyyy")}
                </p>
              </div>

              <div className="summary-item">
                <h4 className="text-sm text-gray-500 mb-1">Number of Invitees</h4>
                <p className="font-medium">{eventSummary.invitees} Guests</p>
              </div>

              <div className="summary-item">
                <h4 className="text-sm text-gray-500 mb-1">Venue Type</h4>
                <p className="font-medium">{eventSummary.venueName}</p>
              </div>

              <div className="summary-item">
                <h4 className="text-sm text-gray-500 mb-1">Food Preferences</h4>
                <p className="font-medium">{eventSummary.foodPreferencesText}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-gray-500 mb-1">Special Instructions</h4>
              <p className="text-gray-700">
                {eventSummary.specialInstructions || "No special instructions provided."}
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 mb-6">
            <div className="flex items-start">
              <div className="text-purple mr-4 mt-1">
                <i className="fas fa-info-circle text-xl"></i>
              </div>
              <div>
                <h4 className="font-medium mb-1">What happens next?</h4>
                <p className="text-gray-600 text-sm">
                  Our event specialists will review your request and contact you
                  within 24 hours with venue options and pricing based on your
                  preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              className="px-6 py-3 gradient-bg text-white rounded-lg font-medium"
              onClick={handleConfirmBooking}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Confirm Booking"}
            </Button>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default EventSummary;
