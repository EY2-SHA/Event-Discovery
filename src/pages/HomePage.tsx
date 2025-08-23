import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Sparkles, TrendingUp, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ 
  end, 
  suffix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Intersection Observer hook for scroll animations
const useIntersectionObserver = (callback: () => void, options = {}) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    }, options);

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, callback]);

  return setRef;
};

const HomePage: React.FC = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsRef = useIntersectionObserver(() => setStatsAnimated(true));

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
      // Removed dark:opacity-50 to give full control to the gradient overlay
      className="w-full h-full object-cover"
    />
    {/* Modified gradient for better visibility and a seamless transition to the next section */}
    <div className="absolute inset-0 bg-gradient-to-b from-light-background/10 via-light-background/30 to-light-background dark:from-dark-background/70 dark:via-dark-background/80 dark:to-dark-background"></div>
  </div>

  {/* Subtle Floating Elements */}
  <div className="absolute top-20 left-10 w-20 h-20 bg-light-primary/20 dark:bg-dark-primary/20 rounded-handcrafted animate-float"></div>
  <div className="absolute top-1/3 right-20 w-32 h-32 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-handcrafted animate-float" style={{ animationDelay: '2s' }}></div>
  <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-light-primary/15 dark:bg-dark-primary/15 rounded-handcrafted animate-float" style={{ animationDelay: '4s' }}></div>

  {/* Hero Content */}
  {/* Added vertical padding (py-24 md:py-32) for more whitespace */}
  <div className="relative z-10 text-center px-8 max-w-6xl mx-auto py-24 md:py-32">
    <div className="mb-12">
      <span className="inline-flex items-center px-6 py-3 bg-light-card dark:bg-dark-card rounded-handcrafted text-lg font-sans text-light-foreground/80 dark:text-dark-foreground/80 border border-light-border dark:border-dark-border shadow-handcrafted">
        <Sparkles className="w-4 h-4 mr-2" />
        Discover Your Next Adventure
      </span>
    </div>
    
    <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-tight mb-12 text-light-foreground dark:text-dark-foreground">
      Find Events That{' '}
      <span className="text-light-secondary dark:text-dark-secondary">
        Inspire
      </span>{' '}
      Your Soul
    </h1>
    
    {/* Increased margin-bottom (mb-20) for more space above the buttons */}
    <p className="font-sans text-2xl md:text-3xl text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed mb-20 max-w-4xl mx-auto">
      Where extraordinary experiences meet kindred spirits. 
      Discover curated events that transform moments into memories.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link
        to="/search"
        className="group flex items-center space-x-3 px-10 py-5 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 shadow-handcrafted hover:animate-sketch text-xl"
      >
        <span>Explore Events</span>
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <Link
        to="/how-it-works"
        className="flex items-center space-x-3 px-10 py-5 bg-light-card dark:bg-dark-card rounded-handcrafted text-light-foreground dark:text-dark-foreground font-sans font-medium border border-light-border dark:border-dark-border hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 shadow-handcrafted text-xl"
      >
        <span>How It Works</span>
      </Link>
    </div>
  </div>
</section>
      {/* Stats Section */}
      <section className="py-32 relative" ref={statsRef}>
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center mx-auto mb-6 shadow-handcrafted">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-4">
                {statsAnimated && <AnimatedCounter end={10000} suffix="+" />}
              </div>
              <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70">Curated Events</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center mx-auto mb-6 shadow-handcrafted">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-4">
                {statsAnimated && <AnimatedCounter end={50000} suffix="+" />}
              </div>
              <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70">Community Members</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center mx-auto mb-6 shadow-handcrafted">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-4">
                {statsAnimated && <AnimatedCounter end={95} suffix="%" />}
              </div>
              <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-32">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-light-foreground dark:text-dark-foreground mb-8">
              Handpicked for{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                You
              </span>
            </h2>
            <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Carefully curated experiences that align with your interests and values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="group block"
                style={{
                  transform: `rotate(${(event.id % 3 - 1) * 0.5}deg)`,
                }}
              >
                <div className="bg-light-card dark:bg-dark-card overflow-hidden border-2 border-light-border dark:border-dark-border hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-brutal hover:shadow-brutal-lg transform hover:-translate-y-2 hover:animate-sketch">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-light-secondary dark:bg-dark-secondary text-white text-sm font-sans font-medium shadow-handcrafted rounded-sketch">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-4 group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-3 text-light-foreground/70 dark:text-dark-foreground/70 font-sans text-base">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/search"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-light-card dark:bg-dark-card rounded-handcrafted text-light-foreground dark:text-dark-foreground font-sans font-medium border border-light-border dark:border-dark-border hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 shadow-handcrafted text-lg"
            >
              <span>View All Events</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <div className="bg-light-muted dark:bg-dark-muted rounded-handcrafted p-16 border-2 border-light-border dark:border-dark-border relative overflow-hidden shadow-handcrafted">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-8">
                Ready to Create Something{' '}
                <span className="text-light-secondary dark:text-dark-secondary">
                  Beautiful?
                </span>
              </h2>
              <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 mb-12 leading-relaxed">
                Join thousands of creators who trust Eventide to bring their visions to life.
              </p>
              <Link
                to="/create-event"
                className="inline-flex items-center space-x-3 px-10 py-5 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 shadow-handcrafted hover:animate-sketch text-xl"
              >
                <span>Create Your Event</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-handcrafted animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-handcrafted animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;