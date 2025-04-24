import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const [_, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="fade-in">
          <h2 className="text-2xl font-poppins font-semibold mb-6">My Profile</h2>

          <Tabs defaultValue="profile" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-6 md:flex-row md:items-start">
                    <Avatar className="h-24 w-24 mb-4 md:mb-0 md:mr-6">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                    
                    <div className="w-full space-y-4">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" defaultValue="Priya Sharma" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="priya.sharma@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" defaultValue="+91 9876543210" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" defaultValue="New Delhi, India" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main Street, Sector 4, New Delhi" />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button className="gradient-bg">Save Changes</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>Your Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
                      <i className="fas fa-calendar-alt text-4xl"></i>
                    </div>
                    <h3 className="text-lg font-medium mb-2">No bookings yet</h3>
                    <p className="text-gray-500 mb-4">You haven't made any bookings yet.</p>
                    <Button className="gradient-bg" onClick={() => navigate("/")}>
                      Plan Your First Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="gradient-bg">Update Password</Button>
                  </div>
                  
                  <div className="border-t pt-4 mt-6">
                    <h3 className="font-medium mb-2">Notification Preferences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="emailNotifications" className="flex-1">Email Notifications</Label>
                        <input type="checkbox" defaultChecked className="toggle" id="emailNotifications" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smsNotifications" className="flex-1">SMS Notifications</Label>
                        <input type="checkbox" defaultChecked className="toggle" id="smsNotifications" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="marketingEmails" className="flex-1">Marketing Emails</Label>
                        <input type="checkbox" className="toggle" id="marketingEmails" />
                      </div>
                    </div>
                  </div>
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

export default Profile;
