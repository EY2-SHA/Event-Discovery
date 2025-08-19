import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Heart, Sparkles, TrendingUp, Clock } from 'lucide-react';

const RecommendationsPage: React.FC = () => {
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
          <h1 className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-6">
            Curated Just{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              For You
            </span>
          </h1>
          <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto">
            Personalized event recommendations based on your interests, location, and past experiences.
          </p>
        </div>

        {/* Personalized Recommendations */}
        <section className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-background" />
            </div>
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground">
                Perfect Matches
              </h2>
              <p className="font-inter text-foreground/70 text-sm">
                Events we think you'll love
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 relative">
                  {/* Match Score Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-gradient-primary text-background text-sm font-inter font-semibold rounded-full">
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
                        <span>{event.date} at {event.time}</span>
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

                    <div className="pt-2 border-t border-white/10">
                      <p className="font-inter text-xs text-cyan">
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
        <section className="text-center bg-gradient-secondary rounded-3xl p-12 border border-white/20">
          <h2 className="font-syne font-bold text-3xl text-foreground mb-4">
            Make Your Recommendations Even{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Better
            </span>
          </h2>
          <p className="font-inter text-foreground/70 mb-8 max-w-2xl mx-auto">
            The more you engage with events, the better our recommendations become. 
            Save events, follow organizers, and attend experiences to improve your personalized feed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/profile"
              className="px-8 py-3 bg-gradient-primary text-background font-inter font-semibold rounded-full hover:scale-105 transition-all duration-300"
            >
              Update Preferences
            </Link>
            <Link
              to="/search"
              className="px-8 py-3 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Explore All Events
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecommendationsPage;