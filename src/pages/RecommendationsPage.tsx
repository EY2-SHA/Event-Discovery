import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Heart, Sparkles, TrendingUp, Clock, Settings, Check } from 'lucide-react';

const RecommendationsPage: React.FC = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  
  const eventTypes = [
    'Music & Concerts', 'Art & Culture', 'Technology', 'Health & Wellness',
    'Food & Drink', 'Sports & Fitness', 'Business', 'Education', 'Networking',
    'Workshops', 'Conferences', 'Social Impact', 'Outdoor Activities', 'Creative Arts'
  ];

  const togglePreference = (preference: string) => {
    setSelectedPreferences(prev => 
      prev.includes(preference) 
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    );
  };

  const recommendedEvents = [
    {
      id: 1,
      title: "Sunset Yoga & Sound Healing",
      date: "March 18, 2025",
      time: "6:00 PM",
      location: "Ocean Beach",
      price: "$35",
      attendees: 28,
      image: "https://images.pexels.com/photos/3820333/pexels-photo-3820333.jpeg",
      category: "Wellness",
      reason: "Based on your interest in meditation events",
      matchScore: 95
    },
    {
      id: 2,
      title: "Creative Writing Circle",
      date: "March 20, 2025",
      time: "7:00 PM",
      location: "Mission Bay Library",
      price: "$20",
      attendees: 15,
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
      category: "Creative",
      reason: "Popular in your area",
      matchScore: 88
    },
    {
      id: 3,
      title: "Organic Gardening Workshop",
      date: "March 25, 2025",
      time: "10:00 AM",
      location: "Community Garden",
      price: "Free",
      attendees: 40,
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg",
      category: "Sustainability",
      reason: "Matches your eco-friendly interests",
      matchScore: 92
    },
  ];

  const trendingEvents = [
    {
      id: 4,
      title: "Digital Detox Weekend Retreat",
      date: "April 12-14, 2025",
      location: "Sonoma County",
      price: "$299",
      attendees: 35,
      image: "https://images.pexels.com/photos/3779785/pexels-photo-3779785.jpeg",
      category: "Wellness",
      trending: true
    },
    {
      id: 5,
      title: "Local Artists Showcase",
      date: "March 30, 2025",
      location: "Arts District Gallery",
      price: "Free",
      attendees: 120,
      image: "https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg",
      category: "Art",
      trending: true
    },
    {
      id: 6,
      title: "Blockchain & Crypto Meetup",
      date: "April 5, 2025",
      location: "Tech Hub",
      price: "$15",
      attendees: 80,
      image: "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg",
      category: "Technology",
      trending: true
    },
  ];

  const upcomingFromFollowed = [
    {
      id: 7,
      title: "Mindful Leadership Workshop",
      date: "April 8, 2025",
      organizer: "Mindful Spaces Collective",
      location: "Downtown Conference Center",
      price: "$89",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      category: "Business"
    },
    {
      id: 8,
      title: "Forest Bathing Experience",
      date: "April 15, 2025",
      organizer: "Nature Connection SF",
      location: "Muir Woods",
      price: "$45",
      image: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg",
      category: "Wellness"
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 bg-light-card dark:bg-dark-card rounded-handcrafted text-lg font-sans text-light-foreground/80 dark:text-dark-foreground/80 border border-light-border dark:border-dark-border shadow-handcrafted">
              <Sparkles className="w-5 h-5 mr-3" />
              Personalized Recommendations
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-light-foreground dark:text-dark-foreground mb-8">
            Curated Just{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              For You
            </span>
          </h1>
          <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Personalized event recommendations based on your interests, location, and past experiences.
          </p>
        </div>

        {/* Personalized Recommendations */}
        <section className="mb-20">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center shadow-handcrafted">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground">
                Perfect Matches
              </h2>
              <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-lg">
                Events we think you'll love
              </p>
            </div>
          </div>

          {/* Wabi-Sabi Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
            {recommendedEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
                style={{
                  transform: `rotate(${(event.id % 3 - 1) * 0.5}deg)`,
                }}
              >
                <div className={`bg-light-card dark:bg-dark-card overflow-hidden border-2 border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-brutal hover:shadow-brutal-lg transform hover:-translate-y-2 relative hover:animate-sketch ${
                  event.id % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}>
                  {/* Match Score Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-4 py-2 bg-light-secondary dark:bg-dark-secondary text-white text-sm font-sans font-semibold rounded-sketch shadow-handcrafted">
                      {event.matchScore}% match
                    </div>
                  </div>

                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-light-background/90 dark:bg-dark-background/90 text-light-foreground dark:text-dark-foreground text-sm font-sans font-medium rounded-sketch shadow-handcrafted">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-5">
                    <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                          <Users className="w-5 h-5" />
                          <span>{event.attendees} attending</span>
                        </div>
                        <span className="font-sans font-semibold text-light-foreground dark:text-dark-foreground text-lg">
                          {event.price}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <p className="font-sans text-sm text-light-secondary dark:text-dark-secondary">
                        {event.reason}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Events */}
        <section className="mb-20">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center shadow-handcrafted">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground">
                Trending Now
              </h2>
              <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-lg">
                Popular events in your area
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
            {trendingEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
                style={{
                  transform: `rotate(${(event.id % 3 - 1) * 0.5}deg)`,
                }}
              >
                <div className="bg-light-card dark:bg-dark-card overflow-hidden border-2 border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-brutal hover:shadow-brutal-lg transform hover:-translate-y-2 relative hover:animate-sketch">
                  {/* Trending Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-4 py-2 bg-red-500 text-white text-sm font-sans font-semibold rounded-sketch shadow-handcrafted flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Trending</span>
                    </div>
                  </div>

                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-light-background/90 dark:bg-dark-background/90 text-light-foreground dark:text-dark-foreground text-sm font-sans font-medium rounded-sketch shadow-handcrafted">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-5">
                    <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                          <Users className="w-5 h-5" />
                          <span>{event.attendees} attending</span>
                        </div>
                        <span className="font-sans font-semibold text-light-foreground dark:text-dark-foreground text-lg">
                          {event.price}
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 border-2 border-light-secondary dark:border-dark-secondary text-light-secondary dark:text-dark-secondary font-sans font-semibold hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-white transition-all duration-300 rounded-handcrafted shadow-handcrafted text-base">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* From Followed Organizers */}
        <section className="mb-20">
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-12 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center shadow-handcrafted">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground">
                From Your Followed Organizers
              </h2>
              <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-lg">
                New events from organizers you follow
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
            {upcomingFromFollowed.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
                style={{
                  transform: `rotate(${(event.id % 3 - 1) * 0.3}deg)`,
                }}
              >
                <div className="bg-light-card dark:bg-dark-card overflow-hidden border-2 border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-brutal hover:shadow-brutal-lg transform hover:-translate-y-2 flex hover:animate-sketch">
                  <div className="w-1/3 relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="w-2/3 p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-4 py-2 bg-light-secondary dark:bg-dark-secondary text-white text-sm font-sans font-medium rounded-sketch shadow-handcrafted">
                          {event.category}
                        </span>
                        <Clock className="w-5 h-5 text-light-foreground/50 dark:text-dark-foreground/50" />
                      </div>
                      
                      <h3 className="font-display font-semibold text-xl text-light-foreground dark:text-dark-foreground group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="font-sans text-base text-light-secondary dark:text-dark-secondary">
                        by {event.organizer}
                      </p>
                    </div>
                    
                    <div className="space-y-3 mt-6">
                      <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                          <MapPin className="w-5 h-5" />
                          <span>{event.location}</span>
                        </div>
                        <span className="font-sans font-semibold text-light-foreground dark:text-dark-foreground text-lg">
                          {event.price}
                        </span>
                      </div>
                      
                      <button className="w-full py-3 border-2 border-light-secondary dark:border-dark-secondary text-light-secondary dark:text-dark-secondary font-sans font-semibold hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-white transition-all duration-300 rounded-handcrafted shadow-handcrafted text-base mt-4">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Personalization CTA */}
        <section className="bg-light-muted dark:bg-dark-muted border border-light-border dark:border-dark-border rounded-handcrafted p-16 shadow-handcrafted">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center mx-auto mb-6 shadow-handcrafted">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-display font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-6">
              Make Your Recommendations Even{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Better
              </span>
            </h2>
            <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              Select your interests to get more personalized event recommendations.
            </p>
          </div>
          
          {/* Preference Selection */}
          <div className="mb-12">
            <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-8 text-center">
              Choose Your Interests
            </h3>
            <div className="flex flex-wrap gap-4 justify-center max-w-6xl mx-auto">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => togglePreference(type)}
                  className={`px-6 py-3 border-2 font-sans font-medium transition-all duration-300 rounded-handcrafted shadow-sketch hover:animate-sketch flex items-center space-x-2 ${
                    selectedPreferences.includes(type)
                      ? 'bg-light-secondary dark:bg-dark-secondary text-white border-light-secondary dark:border-dark-secondary'
                      : 'bg-light-card dark:bg-dark-card text-light-foreground dark:text-dark-foreground border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary'
                  }`}
                >
                  {selectedPreferences.includes(type) && (
                    <Check className="w-4 h-4" />
                  )}
                  <span>{type}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-sans text-lg text-light-foreground/70 dark:text-dark-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed">
              The more you engage with events, the better our recommendations become. 
              Save events, follow organizers, and attend experiences to improve your personalized feed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 rounded-handcrafted shadow-handcrafted hover:animate-sketch text-lg">
                Save Preferences
              </button>
              <Link
                to="/profile"
                className="px-10 py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 rounded-handcrafted shadow-handcrafted text-lg"
              >
                Update Profile
              </Link>
              <Link
                to="/search"
                className="px-10 py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 rounded-handcrafted shadow-handcrafted text-lg"
              >
                Explore All Events
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecommendationsPage;