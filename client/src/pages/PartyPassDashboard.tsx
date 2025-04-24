import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Share2, Gift, Users, Calendar, Award, Trophy, ChevronRight } from "lucide-react";

const PartyPassDashboard = () => {
  const [_, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  // Placeholder data that would come from the user's account
  const userPassData = {
    planType: "Annual Pass",
    validUntil: "April 23, 2026",
    discountUsed: 3,
    hostingCredits: 2,
    referrals: 2,
    nextFreebie: "DJ voucher in 34 days",
    progress: 65,
    premiumEventUsed: false
  };

  const upcomingExclusiveEvents = [
    {
      id: 1,
      title: "Summer Beach Party",
      date: "May 15, 2025",
      location: "Goa Beach Resort",
      earlyAccess: true
    },
    {
      id: 2,
      title: "Bollywood Night",
      date: "May 28, 2025",
      location: "Club Euphoria, Mumbai",
      earlyAccess: true
    },
    {
      id: 3,
      title: "Corporate Mixer",
      date: "June 12, 2025",
      location: "Taj Palace, Delhi",
      earlyAccess: false
    }
  ];

  const referralHistory = [
    {
      id: 1,
      name: "Rahul Sharma",
      date: "March 12, 2025",
      status: "Joined",
      reward: "₹100 credited"
    },
    {
      id: 2,
      name: "Priya Patel",
      date: "April 5, 2025",
      status: "Joined",
      reward: "₹100 credited"
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 mb-20">
        <div className="fade-in">
          <section className="mb-6">
            <h2 className="text-2xl font-poppins font-semibold mb-2">
              PartyPass Dashboard
            </h2>
            <p className="text-gray-600">
              Manage your subscription and view your benefits
            </p>
          </section>

          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">
                <span className="text-purple">{userPassData.planType}</span> Member
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Valid until</p>
                  <p className="font-medium">{userPassData.validUntil}</p>
                </div>
                <Button 
                  className="mt-3 md:mt-0 gradient-bg"
                  onClick={() => navigate("/party-pass")}
                >
                  Manage Subscription
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="events">Exclusive Events</TabsTrigger>
              <TabsTrigger value="referrals">Referrals</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <Gift className="h-5 w-5 mr-2 text-purple" />
                      Next Reward
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">{userPassData.nextFreebie}</p>
                    <Progress value={userPassData.progress} className="mt-2" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-purple" />
                      Free Premium Event 
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-medium">
                      {userPassData.premiumEventUsed ? "Used" : "Available"}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {userPassData.premiumEventUsed 
                        ? "You've already used your free premium event"
                        : "You can redeem this for any premium event"}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Benefits Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 mr-3 text-purple" />
                        <span>Discount on Tickets</span>
                      </div>
                      <span className="font-medium">{userPassData.discountUsed} times used</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-3 text-purple" />
                        <span>Hosting Credits</span>
                      </div>
                      <span className="font-medium">₹{userPassData.hostingCredits * 100} saved</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-3 text-purple" />
                        <span>Referral Earnings</span>
                      </div>
                      <span className="font-medium">₹{userPassData.referrals * 100} earned</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              <div className="space-y-4">
                {upcomingExclusiveEvents.map(event => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-4 flex-1">
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-gray-500">{event.date} • {event.location}</p>
                        {event.earlyAccess && (
                          <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Early Access Available
                          </span>
                        )}
                      </div>
                      <div className="border-t md:border-t-0 md:border-l border-gray-100 flex items-center">
                        <Button variant="ghost" className="px-4 h-full text-purple">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <div className="text-center mt-8">
                  <Button onClick={() => navigate("/events/curated")} className="gradient-bg">
                    Browse All Events
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="referrals">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Invite Friends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Share PartyPass with friends and earn ₹100 for each successful referral!</p>
                  <div className="flex space-x-4">
                    <Button className="flex items-center gradient-bg">
                      <Share2 className="mr-2 h-4 w-4" /> 
                      Share Invite
                    </Button>
                    <Button variant="outline">
                      Copy Referral Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Referral History</CardTitle>
                </CardHeader>
                <CardContent>
                  {referralHistory.length > 0 ? (
                    <div className="space-y-4">
                      {referralHistory.map(referral => (
                        <div key={referral.id} className="flex justify-between items-center border-b border-gray-100 pb-3">
                          <div>
                            <p className="font-medium">{referral.name}</p>
                            <p className="text-xs text-gray-500">{referral.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-green-600 font-medium">{referral.status}</p>
                            <p className="text-xs text-gray-600">{referral.reward}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 py-4">No referrals yet. Start sharing!</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default PartyPassDashboard;