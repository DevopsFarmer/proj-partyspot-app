import { Link } from "wouter";
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import EventCard from "@/components/EventCard";
import { eventCategories } from "@/utils/categoryData";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="fade-in">
          <section className="welcome mb-6">
            <h2 className="text-2xl font-poppins font-semibold mb-1">
              Welcome to PartySpot
            </h2>
            <p className="text-gray-600">India's First Celebration Tech App</p>
          </section>

          <section className="mb-8">
            <div className="h-44 rounded-xl overflow-hidden mb-4 relative">
              <div className="absolute inset-0 gradient-bg opacity-60"></div>
              <img
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=500&q=80"
                alt="Celebration banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-playfair font-bold">
                  Effortless Celebrations
                </h3>
                <p>Plan. Book. Party. All in One.</p>
              </div>
            </div>

            <h3 className="text-xl font-poppins font-semibold mb-4">
              Select a Category
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {eventCategories.map((category) => (
                <EventCard
                  key={category.id}
                  title={category.title}
                  subtitle={category.subtitle}
                  imageSrc={category.imageSrc}
                  linkTo={`/events/${category.id}`}
                  gradientClass={category.gradientClass}
                />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-poppins font-semibold mb-4">
                PartyPass Membership
              </h3>
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-purple-100 mb-8">
                <div className="gradient-bg text-white px-6 py-4">
                  <h4 className="font-semibold text-lg">Upgrade to PartyPass</h4>
                  <p className="text-sm opacity-90">Exclusive benefits & discounts</p>
                </div>
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-purple-50 rounded-full p-3 text-purple">
                      <i className="fas fa-percentage"></i>
                    </div>
                    <div>
                      <h5 className="font-medium">Save up to 20%</h5>
                      <p className="text-sm text-gray-600">On all event bookings & services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-purple-50 rounded-full p-3 text-purple">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h5 className="font-medium">Early Access</h5>
                      <p className="text-sm text-gray-600">Book premium events 24 hours before others</p>
                    </div>
                  </div>
                  <Link href="/party-pass">
                    <button className="w-full gradient-bg text-white py-3 rounded-lg font-medium">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
              
              <h3 className="text-xl font-poppins font-semibold mb-4">
                Upcoming Events
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-center text-gray-500">
                  <i className="far fa-calendar-alt text-4xl mb-2"></i>
                  <p>You don't have any upcoming events</p>
                  <Link href="/events/wedding">
                    <button className="mt-4 gradient-bg text-white px-6 py-2 rounded-lg font-medium">
                      Create Your First Event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Home;
