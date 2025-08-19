import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Heart, Share2, Star, Bookmark } from 'lucide-react';

const EventDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Mock event data - in real app, this would come from API
  const event = {
    id: 1,
    title: "Mindful Mornings: Meditation & Movement",
    date: "March 15, 2025",
    time: "8:00 AM - 10:00 AM",
    location: "Golden Gate Park, San Francisco",
    address: "501 Stanyan St, San Francisco, CA 94117",
    price: "Free",
    capacity: 50,
    attendees: 45,
    rating: 4.8,
    reviews: 124,
    image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg",
    category: "Wellness",
    organizer: {
      name: "Mindful Spaces Collective",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      verified: true,
      followers: 2500
    },
    description: `Start your day with intention through our carefully curated meditation and movement experience. This 2-hour session combines mindfulness meditation, gentle yoga flows, and breathwork techniques designed to center your mind and energize your body.

Join us in the serene setting of Golden Gate Park, where the morning light filters through ancient trees, creating the perfect atmosphere for inner reflection and community connection. Our experienced facilitators will guide you through:

• 30 minutes of guided meditation focusing on breath awareness
• 45 minutes of gentle movement and yoga flows
• 30 minutes of community sharing and reflection
• Complimentary herbal tea and healthy snacks

Whether you're new to meditation or a seasoned practitioner, this experience is designed to meet you where you are. All levels welcome - no experience necessary. Please bring your own yoga mat or towel.`,
    highlights: [
      "Expert-led meditation and movement session",
      "Beautiful outdoor setting in Golden Gate Park",
      "Community of like-minded individuals",
      "Complimentary refreshments included",
      "All experience levels welcome"
    ],
    schedule: [
      { time: "8:00 AM", activity: "Welcome & Centering" },
      { time: "8:15 AM", activity: "Guided Meditation" },
      { time: "8:45 AM", activity: "Mindful Movement" },
      { time: "9:30 AM", activity: "Community Sharing" },
      { time: "10:00 AM", activity: "Closing Circle" }
    ],
    whatToBring: [
      "Yoga mat or large towel",
      "Water bottle",
      "Comfortable clothing",
      "Open mind and heart"
    ]
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
        
        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex space-x-3">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-3 rounded-full backdrop-blur-glass border border-white/20 transition-all duration-300 ${
              isBookmarked ? 'bg-gradient-primary text-background' : 'bg-white/10 text-foreground hover:bg-white/20'
            }`}
          >
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full bg-white/10 backdrop-blur-glass border border-white/20 text-foreground hover:bg-white/20 transition-all duration-300">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-6 left-6">
          <span className="px-4 py-2 bg-gradient-primary text-background font-inter font-medium rounded-full">
            {event.category}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Header */}
            <div>
              <h1 className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-4">
                {event.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-inter font-semibold text-foreground">{event.rating}</span>
                  <span className="font-inter text-foreground/70">({event.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center space-x-1 transition-colors ${
                      isLiked ? 'text-red-400' : 'text-foreground/70 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="font-inter text-sm">248</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 text-foreground/70">
                  <Calendar className="w-5 h-5" />
                  <span className="font-inter">{event.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/70">
                  <Clock className="w-5 h-5" />
                  <span className="font-inter">{event.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/70">
                  <MapPin className="w-5 h-5" />
                  <span className="font-inter">{event.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/70">
                  <Users className="w-5 h-5" />
                  <span className="font-inter">{event.attendees} / {event.capacity} attending</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-none">
              <h2 className="font-syne font-semibold text-2xl text-foreground mb-4">About This Event</h2>
              <div className="font-inter text-foreground/70 leading-relaxed whitespace-pre-line">
                {event.description}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground mb-4">What You'll Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-foreground/70">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground mb-4">Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="font-inter font-semibold text-cyan min-w-20">
                      {item.time}
                    </div>
                    <div className="font-inter text-foreground/70">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Bring */}
            <div>
              <h2 className="font-syne font-semibold text-2xl text-foreground mb-4">What to Bring</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {event.whatToBring.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                    <span className="font-inter text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Card */}
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="font-syne font-bold text-3xl text-foreground mb-2">
                  {event.price}
                </div>
                <p className="font-inter text-foreground/70 text-sm">
                  Registration required
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <Link
                  to={`/tickets/${event.id}`}
                  className="w-full py-4 bg-gradient-primary text-background font-inter font-semibold rounded-xl hover:scale-105 transition-all duration-300 text-center block"
                >
                  Register Now
                </Link>
                <button className="w-full py-3 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-xl hover:bg-white/20 transition-all duration-300">
                  Add to Calendar
                </button>
              </div>

              <div className="text-center text-foreground/50 font-inter text-xs">
                Free cancellation up to 2 hours before event
              </div>
            </div>

            {/* Organizer Card */}
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6">
              <h3 className="font-syne font-semibold text-xl text-foreground mb-4">
                Event Organizer
              </h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={event.organizer.avatar}
                  alt={event.organizer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-inter font-semibold text-foreground">
                      {event.organizer.name}
                    </h4>
                    {event.organizer.verified && (
                      <div className="w-4 h-4 bg-gradient-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-background rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <p className="font-inter text-sm text-foreground/70">
                    {event.organizer.followers} followers
                  </p>
                </div>
              </div>
              
              <button className="w-full py-3 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-xl hover:bg-white/20 transition-all duration-300">
                Follow Organizer
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6">
              <h3 className="font-syne font-semibold text-xl text-foreground mb-4">
                Location
              </h3>
              
              <div className="space-y-3 mb-4">
                <p className="font-inter text-foreground">{event.location}</p>
                <p className="font-inter text-sm text-foreground/70">{event.address}</p>
              </div>
              
              <div className="aspect-video bg-white/5 rounded-xl mb-4 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-foreground/30" />
              </div>
              
              <button className="w-full py-3 bg-white/10 backdrop-blur-glass border border-white/20 text-foreground font-inter font-medium rounded-xl hover:bg-white/20 transition-all duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;