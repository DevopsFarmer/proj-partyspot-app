import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import BackNavigation from "@/components/BackNavigation";
import StepIndicator from "@/components/StepIndicator";
import { FormDropdown } from "@/components/ui/form-dropdown";
import { VenueSelector } from "@/components/ui/venue-selector";
import { FoodSelector } from "@/components/ui/food-selector";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { 
  configSteps, 
  venueTypes, 
  cuisineTypes, 
  dietaryPreferences, 
  getEventDetails,
  getVenueName,
  getFoodPreferenceText
} from "@/utils/categoryData";
import { EventFormData, FoodPreference, EventSummary } from "@/types/event";
import { apiRequest } from "@/lib/queryClient";

const EventConfiguration = () => {
  const [match, params] = useRoute("/configure/:category/:eventType");
  const [_, navigate] = useLocation();
  
  const category = params?.category || "";
  const eventType = params?.eventType || "";
  
  const [currentStep, setCurrentStep] = useState(1);
  const [inviteesValue, setInviteesValue] = useState(100);
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [selectedVenueName, setSelectedVenueName] = useState<string>("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [foodText, setFoodText] = useState<string>("");

  const { register, setValue, watch, handleSubmit } = useForm<EventFormData>({
    defaultValues: {
      category,
      eventType,
      date: "",
      invitees: 100,
      venueType: "",
      foodPreferences: {
        cuisines: [],
        dietary: []
      },
      specialInstructions: ""
    }
  });

  const eventDetails = getEventDetails(category, eventType);
  const eventTitle = eventDetails ? `Plan Your ${eventDetails.title}` : "Plan Your Event";

  const watchDate = watch("date");
  const watchVenueType = watch("venueType");
  const watchFoodPreferences = watch("foodPreferences");
  
  const handleBack = () => {
    navigate(`/events/${category}`);
  };

  const handleDateSelect = (date: string) => {
    setValue("date", date);
    setCurrentStep(2);
  };

  const handleInviteesConfirm = () => {
    setValue("invitees", inviteesValue);
    setCurrentStep(3);
  };

  const handleVenueSelect = (venueId: string, venueName: string) => {
    setSelectedVenue(venueId);
    setSelectedVenueName(venueName);
  };

  const handleVenueConfirm = () => {
    if (selectedVenue) {
      setValue("venueType", selectedVenue);
      setCurrentStep(4);
    }
  };

  const handleFoodConfirm = (cuisines: string[], dietary: string[]) => {
    setSelectedCuisines(cuisines);
    setSelectedDietary(dietary);

    const foodPreferences: FoodPreference = {
      cuisines,
      dietary
    };
    
    setValue("foodPreferences", foodPreferences);
    const text = getFoodPreferenceText(cuisines, dietary);
    setFoodText(text);
    setCurrentStep(5);
  };

  const onSubmit = async (data: EventFormData) => {
    try {
      // Create event summary with additional display fields
      const eventSummary: EventSummary = {
        ...data,
        venueName: getVenueName(data.venueType),
        foodPreferencesText: getFoodPreferenceText(
          data.foodPreferences.cuisines, 
          data.foodPreferences.dietary
        ),
        bookingReference: '' // Will be generated by the server
      };
      
      // Save the event summary to session storage for the summary page
      sessionStorage.setItem('eventSummary', JSON.stringify(eventSummary));
      
      // Navigate to summary page
      navigate("/summary");
    } catch (error) {
      console.error("Failed to submit event:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="fade-in">
          <BackNavigation title={eventTitle} onBack={handleBack} />
          
          <StepIndicator steps={configSteps} currentStep={currentStep} />
          
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Date Selection */}
            <FormDropdown
              label="Choose Date"
              isActive={currentStep === 1}
              isLocked={currentStep > 1}
              icon={<i className="far fa-calendar-alt mr-1"></i>}
              placeholder="Select event date"
              value={watchDate}
              onComplete={handleDateSelect}
              type="date"
            />
            
            {/* Number of Invitees */}
            <FormDropdown
              label="Number of Invitees"
              isActive={currentStep === 2}
              isLocked={currentStep > 2}
              icon={<i className="fas fa-users mr-1"></i>}
              placeholder="Select number of guests"
              value={inviteesValue ? `${inviteesValue} Guests` : ""}
              onComplete={() => {}}
              type="custom"
            >
              <div className="mb-4">
                <Slider
                  defaultValue={[100]}
                  min={10}
                  max={500}
                  step={5}
                  onValueChange={(value) => setInviteesValue(value[0])}
                  disabled={currentStep !== 2}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10</span>
                  <span>250</span>
                  <span>500</span>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <span className="text-2xl font-semibold">{inviteesValue}</span>
                <span className="text-gray-500 ml-2">Guests</span>
              </div>
              
              <div className="flex justify-end">
                <Button
                  className="px-4 py-2 gradient-bg text-white rounded-lg"
                  onClick={handleInviteesConfirm}
                  disabled={currentStep !== 2}
                >
                  Confirm
                </Button>
              </div>
            </FormDropdown>
            
            {/* Venue Type */}
            <FormDropdown
              label="Venue Type"
              isActive={currentStep === 3}
              isLocked={currentStep > 3}
              icon={<i className="fas fa-map-marker-alt mr-1"></i>}
              placeholder="Select venue type"
              value={selectedVenueName}
              onComplete={() => {}}
              type="custom"
            >
              <VenueSelector
                venues={venueTypes}
                selectedVenue={selectedVenue}
                onSelectVenue={handleVenueSelect}
                onConfirm={handleVenueConfirm}
              />
            </FormDropdown>
            
            {/* Food Preferences */}
            <FormDropdown
              label="Food Preferences"
              isActive={currentStep === 4}
              isLocked={currentStep > 4}
              icon={<i className="fas fa-utensils mr-1"></i>}
              placeholder="Select food preferences"
              value={foodText}
              onComplete={() => {}}
              type="custom"
            >
              <FoodSelector
                cuisineTypes={cuisineTypes}
                dietaryPreferences={dietaryPreferences}
                onConfirm={handleFoodConfirm}
              />
            </FormDropdown>
            
            {/* Special Instructions */}
            <div className="mb-6 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-poppins font-semibold mb-4">
                Special Instructions
              </h3>
              <Textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-light"
                placeholder="Any special requests or additional information for your event..."
                {...register("specialInstructions")}
              />
            </div>
            
            <div className="flex justify-end">
              <Button
                type="submit"
                className="px-6 py-3 gradient-bg text-white rounded-lg font-medium"
                disabled={!watchDate || !watchVenueType || !watchFoodPreferences}
              >
                Submit & Continue
              </Button>
            </div>
          </form>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default EventConfiguration;
