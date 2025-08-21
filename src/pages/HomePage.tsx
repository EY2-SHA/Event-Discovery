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
            className="w-full h-full object-cover opacity-10 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-light-background/90 via-light-background/70 to-light-background/90 dark:from-dark-background/90 dark:via-dark-background/70 dark:to-dark-background/90"></div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-light-primary/20 dark:bg-dark-primary/20 rounded-full animate-gentle-bounce"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full animate-gentle-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-light-primary/15 dark:bg-dark-primary/15 rounded-full animate-gentle-bounce" style={{ animationDelay: '4s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-light-card dark:bg-dark-card rounded-full text-sm font-inter text-light-foreground/80 dark:text-dark-foreground/80 border border-light-border dark:border-dark-border shadow-soft">
              <Sparkles className="w-4 h-4 mr-2" />
              Discover Your Next Adventure
            </span>
          </div>
          
          <h1 className="font-syne font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-light-foreground dark:text-dark-foreground">
            Find Events That{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              Inspire
            </span>{' '}
            Your Soul
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Where extraordinary experiences meet kindred spirits. 
            Discover curated events that transform moments into memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/search"
              className="group flex items-center space-x-2 px-8 py-4 bg-light-secondary dark:bg-dark-secondary rounded-full text-light-card dark:text-dark-background font-inter font-semibold hover:opacity-90 transition-all duration-300 shadow-soft-lg"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/how-it-works"
              className="flex items-center space-x-2 px-8 py-4 bg-light-card dark:bg-dark-card rounded-full text-light-foreground dark:text-dark-foreground font-inter font-medium border border-light-border dark:border-dark-border hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 shadow-soft"
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
              <div className="w-16 h-16 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Calendar className="w-8 h-8 text-light-card dark:text-dark-background" />
              </div>
              <div className="font-syne font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-2">10,000+</div>
              <p className="font-inter text-light-foreground/70 dark:text-dark-foreground/70">Curated Events</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Users className="w-8 h-8 text-light-card dark:text-dark-background" />
              </div>
              <div className="font-syne font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-2">50,000+</div>
              <p className="font-inter text-light-foreground/70 dark:text-dark-foreground/70">Community Members</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Sparkles className="w-8 h-8 text-light-card dark:text-dark-background" />
              </div>
              <div className="font-syne font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-2">95%</div>
              <p className="font-inter text-light-foreground/70 dark:text-dark-foreground/70">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-light-foreground dark:text-dark-foreground mb-6">
              Handpicked for{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                You
              </span>
            </h2>
            <p className="font-inter text-xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-2xl mx-auto leading-relaxed">
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
                <div className="bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden border border-light-border dark:border-dark-border hover:border-light-primary dark:hover:border-dark-primary transition-all duration-500 hover:transform hover:scale-105 shadow-soft hover:shadow-soft-lg">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-light-secondary dark:bg-dark-secondary text-light-card dark:text-dark-background text-sm font-inter font-medium rounded-full shadow-soft">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-syne font-semibold text-xl text-light-foreground dark:text-dark-foreground mb-3 group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-light-foreground/70 dark:text-dark-foreground/70 font-inter text-sm">
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
              className="inline-flex items-center space-x-2 px-6 py-3 bg-light-card dark:bg-dark-card rounded-full text-light-foreground dark:text-dark-foreground font-inter font-medium border border-light-border dark:border-dark-border hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 shadow-soft"
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
          <div className="bg-light-muted dark:bg-dark-muted rounded-3xl p-12 border border-light-border dark:border-dark-border relative overflow-hidden shadow-soft-lg">
            <div className="relative z-10">
              <h2 className="font-syne font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-6">
                Ready to Create Something{' '}
                <span className="text-light-secondary dark:text-dark-secondary">
                  Beautiful?
                </span>
              </h2>
              <p className="font-inter text-xl text-light-foreground/70 dark:text-dark-foreground/70 mb-8 leading-relaxed">
                Join thousands of creators who trust Eventide to bring their visions to life.
              </p>
              <Link
                to="/create-event"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-light-secondary dark:bg-dark-secondary rounded-full text-light-card dark:text-dark-background font-inter font-semibold hover:opacity-90 transition-all duration-300 shadow-soft-lg"
              >
                <span>Create Your Event</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;