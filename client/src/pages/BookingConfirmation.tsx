import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Button } from "@/components/ui/button";
import { EventSummary } from "@/types/event";

const BookingConfirmation = () => {
  const [_, navigate] = useLocation();
  const [bookingReference, setBookingReference] = useState<string>("");

  useEffect(() => {
    // Retrieve event summary from session storage
    const summaryData = sessionStorage.getItem("eventSummary");
    if (summaryData) {
      const eventSummary = JSON.parse(summaryData) as EventSummary;
      setBookingReference(eventSummary.bookingReference);
    } else {
      // If no data, redirect back to home
      navigate("/");
    }
  }, [navigate]);

  const handleReturnHome = () => {
    // Clear session storage and return to home
    sessionStorage.removeItem("eventSummary");
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="text-center py-10 fade-in">
          <div className="inline-block rounded-full bg-green-100 p-6 mb-6">
            <i className="fas fa-check-circle text-5xl text-green-500"></i>
          </div>

          <h2 className="text-2xl font-poppins font-semibold mb-2">
            Booking Request Submitted!
          </h2>
          <p className="text-gray-600 mb-8">
            We have received your event request. Our team will contact you
            shortly.
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8 text-left">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <i className="fas fa-clipboard-list text-purple"></i>
              </div>
              <h3 className="font-medium">Booking Reference</h3>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50 text-center mb-4">
              <span className="font-mono text-lg font-medium">
                {bookingReference || "PS-000000"}
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Please save this reference for future communications
            </p>
          </div>

          <Button
            className="px-6 py-3 gradient-bg text-white rounded-lg font-medium"
            onClick={handleReturnHome}
          >
            Return to Home
          </Button>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default BookingConfirmation;
