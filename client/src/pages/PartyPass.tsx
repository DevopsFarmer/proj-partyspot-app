import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { SubscriptionCard } from "@/components/ui/subscription-card";
import SubscriptionBenefits from "@/components/SubscriptionBenefits";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PartyPass = () => {
  const [_, navigate] = useLocation();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{title: string, price: string} | null>(null);
  const { toast } = useToast();

  const monthlyFeatures = [
    "Early access to curated parties",
    "10% discount on ticket bookings",
    "₹100 off on every hosted party",
    "Priority customer support",
    "Refer friends & earn ₹100/each"
  ];

  const annualFeatures = [
    "Early access to curated parties",
    "20% discount on ticket bookings",
    "₹100 off on every hosted party",
    "Priority customer support",
    "1 free DJ voucher every 3 months",
    "Refer friends & earn ₹100/each",
    "Free pass to 1 premium event"
  ];

  const handleSelectPlan = (planTitle: string, price: string) => {
    setSelectedPlan({title: planTitle, price});
    setShowConfirmation(true);
  };

  const handleConfirmSubscription = () => {
    setShowConfirmation(false);
    
    toast({
      title: "Subscription Activated!",
      description: `Your ${selectedPlan?.title} is now active. Enjoy the benefits!`,
    });
    
    // After a brief delay, navigate to the dashboard
    setTimeout(() => {
      navigate("/party-pass-dashboard");
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 mb-20">
        <div className="fade-in">
          <section className="mb-6">
            <h2 className="text-2xl font-poppins font-semibold mb-2">
              PartyPass Subscription
            </h2>
            <p className="text-gray-600">
              Unlock exclusive benefits with our subscription plans
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <SubscriptionCard
              title="Monthly Pass"
              price="199"
              validity="month"
              description="Perfect for college students and occasional party-goers"
              features={monthlyFeatures}
              onSelect={() => handleSelectPlan("Monthly Pass", "199")}
            />
            
            <SubscriptionCard
              title="Annual Pass"
              price="999"
              validity="year"
              description="Best for frequent users and event hosts"
              features={annualFeatures}
              isPremium
              onSelect={() => handleSelectPlan("Annual Pass", "999")}
            />
          </div>

          <SubscriptionBenefits />
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-poppins font-semibold mb-4">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Can I cancel my subscription anytime?</h4>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. However, we don't offer refunds for partially used subscription periods.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">How do I redeem my benefits?</h4>
                <p className="text-gray-600">All benefits are automatically applied when you're logged in. Discounts will show up at checkout, and you'll get notifications for your free vouchers.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Can I upgrade from monthly to annual plan?</h4>
                <p className="text-gray-600">Absolutely! You can upgrade anytime and we'll prorate the remaining value of your current subscription.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Subscription</DialogTitle>
            <DialogDescription>
              You're about to subscribe to the {selectedPlan?.title} for ₹{selectedPlan?.price}.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-600 mb-4">
              By confirming, you agree to our subscription terms and conditions. Your subscription will auto-renew until canceled.
            </p>
            <div className="bg-purple-50 p-3 rounded-md">
              <p className="font-medium text-purple">Summary:</p>
              <p className="text-sm">Plan: {selectedPlan?.title}</p>
              <p className="text-sm">Price: ₹{selectedPlan?.price} {selectedPlan?.title === "Monthly Pass" ? "/month" : "/year"}</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>Cancel</Button>
            <Button className="gradient-bg" onClick={handleConfirmSubscription}>Confirm Payment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PartyPass;