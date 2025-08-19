import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Mindful Mornings: Meditation & Movement",
      date: "March 15, 2025",
      location: "Golden Gate Park",
      image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg",
      category: "Wellness"
    },
    {
      id: 2,
      title: "Digital Artistry Workshop",
      date: "March 22, 2025",
      location: "Mission District Studio",
      image: "https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg",
      category: "Creative"
    },
    {
      id: 3,
      title: "Sustainable Living Summit",
      date: "April 3, 2025",
      location: "Moscone Center",
      image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg",
      category: "Conference"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-primary rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-glass rounded-full text-sm font-inter text-foreground/80 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Discover Your Next Adventure
            </span>
          </div>
          
          <h1 className="font-syne font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
            Find Events That{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Inspire
            </span>{' '}
            Your Soul
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Where extraordinary experiences meet kindred spirits. 
            Discover curated events that transform moments into memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/search"
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-primary rounded-full text-background font-inter font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/how-it-works"
              className="flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-glass rounded-full text-foreground font-inter font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <span>How It Works</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-background" />
              </div>
              <div className="font-syne font-bold text-4xl text-foreground mb-2">10,000+</div>
              <p className="font-inter text-foreground/70">Curated Events</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-background" />
              </div>
              <div className="font-syne font-bold text-4xl text-foreground mb-2">50,000+</div>
              <p className="font-inter text-foreground/70">Community Members</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-background" />
              </div>
              <div className="font-syne font-bold text-4xl text-foreground mb-2">95%</div>
              <p className="font-inter text-foreground/70">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-6">
              Handpicked for{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                You
              </span>
            </h2>
            <p className="font-inter text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Carefully curated experiences that align with your interests and values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-glass rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-primary text-background text-sm font-inter font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-syne font-semibold text-xl text-foreground mb-3 group-hover:text-cyan transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-foreground/70 font-inter text-sm">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/search"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-glass rounded-full text-foreground font-inter font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-secondary rounded-3xl p-12 border border-white/20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-syne font-bold text-4xl text-foreground mb-6">
                Ready to Create Something{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Beautiful?
                </span>
              </h2>
              <p className="font-inter text-xl text-foreground/70 mb-8 leading-relaxed">
                Join thousands of creators who trust Eventide to bring their visions to life.
              </p>
              <Link
                to="/create-event"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-primary rounded-full text-background font-inter font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span>Create Your Event</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary rounded-full opacity-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;