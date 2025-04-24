import { Check } from "lucide-react";

const SubscriptionBenefits = () => {
  const benefits = [
    "Early access to curated parties (24-hour head start)",
    "Exclusive 10–20% discount on ticket bookings",
    "₹100 off on every hosted party booking",
    "Priority customer support",
    "1 free DJ voucher every 3 months (for hosts)",
    "Refer friends & earn ₹100/each",
    "Free pass to 1 premium event (Annual Plan only)"
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
      <h3 className="text-xl font-poppins font-semibold mb-4">PartyPass Benefits</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <div className="text-purple bg-purple-50 p-1 rounded-full mr-3">
              <Check className="h-4 w-4" />
            </div>
            <p className="text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-purple-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium mb-2">Why PartyPass?</h4>
        <p className="text-gray-600">
          PartyPass provides you with exclusive benefits and savings. It's more than just a subscription - 
          it's your ticket to premium experiences, priority services, and a community of party enthusiasts!
        </p>
      </div>
    </div>
  );
};

export default SubscriptionBenefits;