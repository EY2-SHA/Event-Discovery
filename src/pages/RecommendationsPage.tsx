import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Heart, Sparkles, TrendingUp, Clock, Settings } from 'lucide-react';

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
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-light-foreground dark:text-dark-foreground mb-6">
            Curated Just{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              For You
            </span>
          </h1>
          <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-2xl mx-auto">
            Personalized event recommendations based on your interests, location, and past experiences.
          </p>
        </div>

        {/* Personalized Recommendations */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground">
                Perfect Matches
              </h2>
              <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-sm">
                Events we think you'll love
              </p>
            </div>
          </div>

          {/* Wabi-Sabi Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {recommendedEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
                style={{
                  transform: `rotate(${(event.id % 3 - 1) * 0.3}deg)`,
                }}
              >
                <div className={`bg-light-card dark:bg-dark-card overflow-hidden border-2 border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-brutal hover:shadow-brutal-lg transform hover:-translate-y-1 relative ${
                  event.id % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}>
                  {/* Match Score Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-light-secondary dark:bg-dark-secondary text-white text-sm font-sans font-semibold">
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
                      <span className="px-3 py-1 bg-light-background/90 dark:bg-dark-background/90 text-light-foreground dark:text-dark-foreground text-sm font-sans font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-semibold text-xl text-light-foreground dark:text-dark-foreground group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-sm">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attending</span>
                        </div>
                        <span className="font-sans font-semibold text-light-foreground dark:text-dark-foreground">
                          {event.price}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <p className="font-sans text-xs text-light-secondary dark:text-dark-secondary">
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
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-background" />
            </div>
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground">
                Trending Now
              </h2>
              <p className="font-inter text-foreground/70 text-sm">
                Popular events in your area
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 relative">
                  {/* Trending Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-red-500 text-white text-sm font-inter font-semibold rounded-full flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
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
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-sm font-inter font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-syne font-semibold text-xl text-foreground group-hover:text-cyan transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attending</span>
                        </div>
                        <span className="font-inter font-semibold text-foreground">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* From Followed Organizers */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-background" />
            </div>
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground">
                From Your Followed Organizers
              </h2>
              <p className="font-inter text-foreground/70 text-sm">
                New events from organizers you follow
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFromFollowed.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 flex">
                  <div className="w-1/3 relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="w-2/3 p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-gradient-primary text-background text-sm font-inter font-medium rounded-full">
                          {event.category}
                        </span>
                        <Clock className="w-4 h-4 text-foreground/50" />
                      </div>
                      
                      <h3 className="font-syne font-semibold text-lg text-foreground group-hover:text-cyan transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="font-inter text-sm text-cyan">
                        by {event.organizer}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-foreground/70 font-inter text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <span className="font-inter font-semibold text-foreground">
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Personalization CTA */}
        <section className="bg-light-muted dark:bg-dark-muted border-2 border-light-border dark:border-dark-border p-12">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-display font-bold text-3xl text-light-foreground dark:text-dark-foreground mb-4">
              Make Your Recommendations Even{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Better
              </span>
            </h2>
            <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 mb-8 max-w-2xl mx-auto">
              Select your interests to get more personalized event recommendations.
            </p>
          </div>
          
          {/* Preference Selection */}
          <div className="mb-8">
            <h3 className="font-display font-semibold text-xl text-light-foreground dark:text-dark-foreground mb-4 text-center">
              Choose Your Interests
            </h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => togglePreference(type)}
                  className={`px-4 py-2 border-2 font-sans font-medium transition-all duration-300 ${
                    selectedPreferences.includes(type)
                      ? 'bg-light-secondary dark:bg-dark-secondary text-white border-light-secondary dark:border-dark-secondary'
                      : 'bg-light-card dark:bg-dark-card text-light-foreground dark:text-dark-foreground border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 mb-8 max-w-2xl mx-auto">
              The more you engage with events, the better our recommendations become. 
              Save events, follow organizers, and attend experiences to improve your personalized feed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300">
                Save Preferences
              </button>
              <Link
                to="/profile"
                className="px-8 py-3 bg-light-card dark:bg-dark-card border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300"
              >
                Update Profile
              </Link>
              <Link
                to="/search"
                className="px-8 py-3 bg-light-card dark:bg-dark-card border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300"
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