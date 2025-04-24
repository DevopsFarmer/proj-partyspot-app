import { useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { curatedEvents } from '@/utils/categoryData';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";

const CuratedEventDetail = () => {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute<{ id: string }>('/events/curated/:id');
  const { toast } = useToast();
  const [showQRCode, setShowQRCode] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  
  if (!match || !params) {
    return <div>Event not found</div>;
  }
  
  const event = curatedEvents.find(e => e.id === params.id);
  
  if (!event) {
    return <div>Event not found</div>;
  }
  
  // Default values for fields that might not be in our data model yet
  const lineup = [
    'DJ Rhythm - Main Stage (9PM - 12AM)',
    'Live Band Performance (8PM - 9PM)',
    'Special Guest Appearance at 10PM'
  ];
  
  const dressCode = 'Smart Casual - No shorts or flip-flops allowed';
  
  const entryRules = [
    'Age 21+ only, valid ID required',
    'Tickets are non-refundable',
    'No outside food or beverages allowed'
  ];
  
  const hostInfo = {
    name: 'PartySpot Events Team',
    contact: 'events@partyspot.com',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
  };
  
  const handleBookNow = () => {
    toast({
      title: "Booking Confirmed!",
      description: `You've successfully booked ${ticketQuantity} ticket(s) for ${event.title}`,
    });
    setIsBooked(true);
    setShowQRCode(true);
  };
  
  const handleDecreaseTickets = () => {
    if (ticketQuantity > 1) {
      setTicketQuantity(ticketQuantity - 1);
    }
  };
  
  const handleIncreaseTickets = () => {
    if (ticketQuantity < 10) {
      setTicketQuantity(ticketQuantity + 1);
    }
  };
  
  // Remove commas and convert to number for calculation
  const priceNumber = parseFloat(event.price.replace(/[₹,]/g, ''));
  const totalPrice = priceNumber * ticketQuantity;
  const formattedTotalPrice = `₹${totalPrice.toLocaleString('en-IN')}`;
  
  return (
    <div className="bg-ivory min-h-screen pb-20">
      <Header title={event.title} onBack={() => setLocation('/events/curated')} />
      
      <main className="container mx-auto px-4 py-2">
        {/* Event Banner */}
        <div className="relative h-64 rounded-xl overflow-hidden mb-6">
          <img 
            src={event.imageSrc} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-white mb-1">{event.title}</h1>
                <p className="text-white opacity-90">{event.subtitle}</p>
              </div>
              <div className="bg-yellow-300 text-gray-900 px-3 py-2 rounded-lg font-bold">
                {event.price}
              </div>
            </div>
          </div>
        </div>
        
        {/* Event Details */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="grid gap-4">
            <div className="flex items-center text-gray-700">
              <i className="fas fa-map-marker-alt text-purple mr-3 text-lg"></i>
              <div>
                <p>{event.location}</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-purple hover:underline"
                >
                  View on Map
                </a>
              </div>
            </div>
            
            <div className="flex items-center text-gray-700">
              <i className="far fa-calendar-alt text-purple mr-3 text-lg"></i>
              <p>{event.date}, {event.time}</p>
            </div>
            
            <div className="flex items-center text-gray-700">
              <i className="fas fa-users text-purple mr-3 text-lg"></i>
              <p>{event.capacity}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {event.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-purple-50 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">About This Event</h2>
          <p className="text-gray-700">{event.description}</p>
        </div>
        
        {/* What's Included */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">What's Included</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {event.whatsIncluded.map((item, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Rules & Dress Code */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Entry Requirements</h2>
          
          <h3 className="font-medium text-gray-800 mb-2">Dress Code</h3>
          <p className="text-gray-700 mb-4">{dressCode}</p>
          
          <h3 className="font-medium text-gray-800 mb-2">Entry Rules</h3>
          <ul className="space-y-2 mb-4">
            {entryRules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-info-circle text-purple mr-3 mt-1"></i>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Host Info */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-semibold mb-4">Hosted By</h2>
          <div className="flex items-center">
            <img 
              src={hostInfo.image} 
              alt={hostInfo.name} 
              className="w-12 h-12 rounded-full mr-4 object-cover" 
            />
            <div>
              <p className="font-medium">{hostInfo.name}</p>
              <p className="text-gray-600 text-sm">{hostInfo.contact}</p>
            </div>
          </div>
        </div>
        
        {/* QR Code (shown after booking) */}
        {showQRCode && (
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Your Ticket</h2>
            <div className="bg-gray-100 p-6 rounded-lg inline-block mb-4">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PartySpot-Ticket-123456789" 
                alt="QR Code Ticket" 
                className="mx-auto"
              />
            </div>
            <p className="text-sm text-gray-600">Present this QR code at the venue entrance</p>
            <p className="font-medium mt-2">Booking ID: PST-{Math.floor(Math.random() * 10000)}</p>
            <p className="text-sm mt-1">Number of Tickets: {ticketQuantity}</p>
            <p className="font-medium mt-2">Total Amount: {formattedTotalPrice}</p>
          </div>
        )}
        
        {/* Ticket Quantity and Book Now */}
        {!isBooked && (
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Book Your Tickets</h2>
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="font-medium">Number of Tickets</p>
                  <p className="text-gray-600 text-sm">Maximum 10 tickets per booking</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={handleDecreaseTickets}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    <i className="fas fa-minus text-gray-700"></i>
                  </button>
                  
                  <span className="font-medium text-lg w-6 text-center">{ticketQuantity}</span>
                  
                  <button 
                    onClick={handleIncreaseTickets}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    <i className="fas fa-plus text-gray-700"></i>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="font-medium">Total Price</p>
                <p className="text-2xl font-bold text-purple">{formattedTotalPrice}</p>
              </div>
            </div>
            
            <Button 
              onClick={handleBookNow}
              className="w-full gradient-bg text-white py-6 rounded-lg font-medium text-lg"
            >
              Book Now
            </Button>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default CuratedEventDetail;