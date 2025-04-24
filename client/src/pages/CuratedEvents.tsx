import { useState } from 'react';
import { Link } from 'wouter';
import { curatedEvents } from '@/utils/categoryData';
import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';

interface FilterOptions {
  city: string;
  date: string;
  priceRange: string;
  theme: string;
}

const CuratedEvents = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    city: '',
    date: '',
    priceRange: '',
    theme: ''
  });
  
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'price'>('newest');
  
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Goa'];
  const priceRanges = ['₹1,000-₹3,000', '₹3,000-₹5,000', '₹5,000+'];
  const themes = ['Nightclub', 'Garden', 'Pool', 'Rooftop'];
  
  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters({
      ...filters,
      [key]: value === filters[key] ? '' : value // Toggle if already selected
    });
  };
  
  // We would use these filters in a real app with API calls
  // For now, we'll just display all events
  const filteredEvents = curatedEvents;
  
  return (
    <div className="bg-ivory min-h-screen pb-20">
      <Header title="Curated Parties" showBackButton={false} />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Exclusive Curated Experiences</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="font-semibold mb-3">Filters</h2>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">City</p>
            <div className="flex flex-wrap gap-2">
              {cities.map(city => (
                <button
                  key={city}
                  onClick={() => handleFilterChange('city', city)}
                  className={`text-sm px-3 py-1 rounded-full ${
                    filters.city === city 
                      ? 'bg-purple text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Price Range</p>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map(range => (
                <button
                  key={range}
                  onClick={() => handleFilterChange('priceRange', range)}
                  className={`text-sm px-3 py-1 rounded-full ${
                    filters.priceRange === range 
                      ? 'bg-purple text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Theme</p>
            <div className="flex flex-wrap gap-2">
              {themes.map(theme => (
                <button
                  key={theme}
                  onClick={() => handleFilterChange('theme', theme)}
                  className={`text-sm px-3 py-1 rounded-full ${
                    filters.theme === theme 
                      ? 'bg-purple text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-600 mb-2">Month</p>
            <select 
              onChange={(e) => handleFilterChange('date', e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg w-full"
            >
              <option value="">All Months</option>
              <option value="June">June 2023</option>
              <option value="July">July 2023</option>
              <option value="August">August 2023</option>
              <option value="September">September 2023</option>
            </select>
          </div>
        </div>
        
        {/* Sort Options */}
        <div className="flex justify-end mb-4">
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setSortBy('newest')}
              className={`px-3 py-1 text-sm ${
                sortBy === 'newest' ? 'bg-purple text-white' : 'bg-white text-gray-700'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setSortBy('popular')}
              className={`px-3 py-1 text-sm border-l border-r border-gray-200 ${
                sortBy === 'popular' ? 'bg-purple text-white' : 'bg-white text-gray-700'
              }`}
            >
              Popular
            </button>
            <button
              onClick={() => setSortBy('price')}
              className={`px-3 py-1 text-sm ${
                sortBy === 'price' ? 'bg-purple text-white' : 'bg-white text-gray-700'
              }`}
            >
              Price
            </button>
          </div>
        </div>
        
        {/* Event List - Yellow Card Style */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredEvents.map(event => (
            <Link key={event.id} href={`/events/curated/${event.id}`}>
              <div className="bg-yellow-300 rounded-xl overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.imageSrc} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="text-gray-800 mt-1">{event.date} • {event.location.split(',')[0]}</p>
                  
                  <p className="mt-3 text-gray-800">{event.description}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-2xl font-bold text-gray-900">{event.price}</div>
                    
                    <button className="px-4 py-2 bg-white text-purple font-medium rounded-md shadow-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default CuratedEvents;