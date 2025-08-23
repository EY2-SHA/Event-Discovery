import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Heart, Share2, Star, Bookmark, Quote, CheckCircle, Info } from 'lucide-react';

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
    <div className="pt-20 min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-light-background/90 via-light-background/30 to-transparent dark:from-dark-background/90 dark:via-dark-background/30"></div>
        
        {/* Action Buttons */}
        <div className="absolute top-8 right-8 flex space-x-4">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-4 rounded-handcrafted border border-white/20 transition-all duration-300 shadow-handcrafted ${
              isBookmarked ? 'bg-light-secondary dark:bg-dark-secondary text-white' : 'bg-white/20 text-light-foreground dark:text-dark-foreground hover:bg-white/30'
            }`}
          >
            <Bookmark className="w-6 h-6" />
          </button>
          <button className="p-4 rounded-handcrafted bg-white/20 border border-white/20 text-light-foreground dark:text-dark-foreground hover:bg-white/30 transition-all duration-300 shadow-handcrafted">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-8 left-8">
          <span className="px-6 py-3 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-medium rounded-handcrafted shadow-handcrafted">
            {event.category}
          </span>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Event Header */}
            <div>
              <h1 className="font-display font-bold text-5xl md:text-6xl text-light-foreground dark:text-dark-foreground mb-6">
                {event.title}
              </h1>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="font-sans font-semibold text-light-foreground dark:text-dark-foreground text-lg">{event.rating}</span>
                  <span className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-lg">({event.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center space-x-1 transition-colors ${
                      isLiked ? 'text-red-400' : 'text-light-foreground/70 dark:text-dark-foreground/70 hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="font-sans text-base">248</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                  <Calendar className="w-6 h-6" />
                  <span className="font-sans text-lg">{event.date}</span>
                </div>
                <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                  <Clock className="w-6 h-6" />
                  <span className="font-sans text-lg">{event.time}</span>
                </div>
                <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                  <MapPin className="w-6 h-6" />
                  <span className="font-sans text-lg">{event.location}</span>
                </div>
                <div className="flex items-center space-x-4 text-light-foreground/70 dark:text-dark-foreground/70">
                  <Users className="w-6 h-6" />
                  <span className="font-sans text-lg">{event.attendees} / {event.capacity} attending</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-none">
              <h2 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground mb-8">About This Event</h2>
              
              {/* Featured Quote */}
              <div className="bg-light-secondary/10 dark:bg-dark-secondary/10 border-l-4 border-light-secondary dark:border-dark-secondary rounded-handcrafted p-8 mb-8">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-light-secondary dark:text-dark-secondary flex-shrink-0 mt-1" />
                  <p className="font-sans text-xl text-light-foreground dark:text-dark-foreground italic leading-relaxed">
                    "Join us for a transformative morning that will leave you feeling centered, energized, and connected to both yourself and our beautiful community."
                  </p>
                </div>
              </div>
              
              <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-8 mb-8 shadow-handcrafted">
                <div className="font-sans text-light-foreground/80 dark:text-dark-foreground/80 leading-relaxed whitespace-pre-line text-xl">
                  {event.description}
                </div>
              </div>
              
              {/* Enhanced description styling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-6 shadow-handcrafted">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-6 h-6 text-light-secondary dark:text-dark-secondary" />
                    <h4 className="font-display font-semibold text-light-foreground dark:text-dark-foreground text-lg">Duration</h4>
                  </div>
                  <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-base">2 hours of mindful practice</p>
                </div>
                <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-6 shadow-handcrafted">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-6 h-6 text-light-secondary dark:text-dark-secondary" />
                    <h4 className="font-display font-semibold text-light-foreground dark:text-dark-foreground text-lg">Experience Level</h4>
                  </div>
                  <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-base">All levels welcome</p>
                </div>
              </div>
              
              {/* Important Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-handcrafted p-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-blue-900 dark:text-blue-100 mb-2">Important Information</h4>
                    <p className="font-sans text-blue-800 dark:text-blue-200 text-base">
                      Please arrive 15 minutes early for check-in. Bring your own yoga mat or towel. Light refreshments will be provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground mb-6">What You'll Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-lg">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h2 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground mb-6">Schedule</h2>
              <div className="space-y-6">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-6 p-6 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted shadow-handcrafted">
                    <div className="font-sans font-semibold text-light-secondary dark:text-dark-secondary min-w-24 text-lg">
                      {item.time}
                    </div>
                    <div className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-lg">
                      {item.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Bring */}
            <div>
              <h2 className="font-display font-semibold text-3xl text-light-foreground dark:text-dark-foreground mb-6">What to Bring</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.whatToBring.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-light-secondary dark:bg-dark-secondary rounded-full flex-shrink-0"></div>
                    <span className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 space-y-8">
            {/* Ticket Card */}
            <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-8 relative shadow-handcrafted">
              <div className="text-center mb-8">
                <div className="font-display font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-3">
                  {event.price}
                </div>
                <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-base">
                  Registration required
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <Link
                  to={`/tickets/${event.id}`}
                  className="w-full py-5 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 text-center block rounded-handcrafted shadow-handcrafted hover:animate-sketch text-lg"
                >
                  Register Now
                </Link>
                <button className="w-full py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 rounded-handcrafted shadow-handcrafted text-lg">
                  Add to Calendar
                </button>
              </div>

              <div className="text-center text-light-foreground/50 dark:text-dark-foreground/50 font-sans text-sm">
                Free cancellation up to 2 hours before event
              </div>
            </div>

            {/* Organizer Card */}
            <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-8 shadow-handcrafted">
              <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-6">
                Event Organizer
              </h3>
              
              <div className="flex items-center space-x-5 mb-6">
                <img
                  src={event.organizer.avatar}
                  alt={event.organizer.name}
                  className="w-16 h-16 rounded-handcrafted object-cover shadow-handcrafted"
                />
                <div>
                  <div className="flex items-center space-x-3">
                    <h4 className="font-sans font-semibold text-light-foreground dark:text-dark-foreground text-lg">
                      {event.organizer.name}
                    </h4>
                    {event.organizer.verified && (
                      <div className="w-5 h-5 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70">
                    {event.organizer.followers} followers
                  </p>
                </div>
              </div>
              
              <button className="w-full py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 rounded-handcrafted shadow-handcrafted text-lg">
                Follow Organizer
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-8 shadow-handcrafted">
              <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-6">
                Location
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="font-sans text-light-foreground dark:text-dark-foreground text-lg">{event.location}</p>
                <p className="font-sans text-base text-light-foreground/70 dark:text-dark-foreground/70">{event.address}</p>
              </div>
              
              <div className="aspect-video bg-light-background/50 dark:bg-dark-background/50 rounded-handcrafted mb-6 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-light-foreground/30 dark:text-dark-foreground/30" />
              </div>
              
              <button className="w-full py-4 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 rounded-handcrafted shadow-handcrafted text-lg">
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