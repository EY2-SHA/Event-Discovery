import React from 'react';
import { Search, Calendar, Users, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description: "Browse curated events or let our AI recommend perfect matches based on your interests and location.",
      features: ["Smart search filters", "Personalized recommendations", "Category browsing"]
    },
    {
      number: "02",
      icon: Calendar,
      title: "Register",
      description: "Secure your spot with our seamless registration process. Digital tickets are delivered instantly.",
      features: ["One-click registration", "Secure payments", "Instant confirmation"]
    },
    {
      number: "03",
      icon: Users,
      title: "Connect",
      description: "Meet like-minded individuals and engage with the community before, during, and after events.",
      features: ["Event chat rooms", "Attendee profiles", "Social features"]
    },
    {
      number: "04",
      icon: Heart,
      title: "Experience",
      description: "Enjoy meaningful experiences and build lasting connections that extend beyond the event itself.",
      features: ["Quality experiences", "Lasting connections", "Community building"]
    }
  ];

  const organizerSteps = [
    {
      title: "Create Your Event",
      description: "Use our intuitive event creation tools to bring your vision to life.",
      icon: Calendar
    },
    {
      title: "Reach Your Audience",
      description: "Leverage our platform's reach and marketing tools to connect with the right attendees.",
      icon: Users
    },
    {
      title: "Manage Seamlessly",
      description: "Track registrations, manage attendees, and access real-time analytics.",
      icon: Star
    }
  ];

  const benefits = [
    {
      title: "Curated Quality",
      description: "Every event is carefully reviewed to ensure meaningful experiences.",
      icon: CheckCircle
    },
    {
      title: "Secure Platform",
      description: "Your data and payments are protected with industry-standard security.",
      icon: CheckCircle
    },
    {
      title: "Community-Driven",
      description: "Join a community that values authentic connections and personal growth.",
      icon: CheckCircle
    },
    {
      title: "Global Reach",
      description: "Discover events worldwide or find intimate local gatherings in your neighborhood.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-light-card dark:bg-dark-card rounded-full text-sm font-sans text-light-foreground/80 dark:text-dark-foreground/80 border-2 border-light-border dark:border-dark-border shadow-soft">
              <Star className="w-4 h-4 mr-2" />
              How It Works
            </span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl text-light-foreground dark:text-dark-foreground mb-8">
            Your Journey to{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              Meaningful Connection
            </span>
          </h1>
          
          <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed max-w-2xl mx-auto">
            From discovery to connection, we've designed every step to help you find and create 
            experiences that matter. Here's how Eventide brings people together.
          </p>
        </div>
      </section>

      {/* How It Works - Attendees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-6">
              For Event{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Seekers
              </span>
            </h2>
            <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-2xl mx-auto">
              Four simple steps to transform how you discover and experience events.
            </p>
          </div>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2 space-y-6">
                  <div className="bg-light-card dark:bg-dark-card border-2 border-light-border dark:border-dark-border p-8 shadow-soft">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl font-display font-bold text-light-secondary dark:text-dark-secondary">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="font-display font-bold text-2xl text-light-foreground dark:text-dark-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="font-sans text-lg text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-light-secondary dark:bg-dark-secondary rounded-full"></div>
                          <span className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="aspect-square bg-light-muted dark:bg-dark-muted border-2 border-light-border dark:border-dark-border flex items-center justify-center relative overflow-hidden shadow-brutal">
                      <step.icon className="w-32 h-32 text-light-foreground/20 dark:text-dark-foreground/20" />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-light-secondary/10 dark:to-dark-secondary/10"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-light-secondary dark:bg-dark-secondary"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-light-secondary/70 dark:bg-dark-secondary/70"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Organizers */}
      <section className="py-20 bg-light-muted/30 dark:bg-dark-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-6">
              For Event{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Organizers
              </span>
            </h2>
            <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-2xl mx-auto">
              Create, promote, and manage events that bring your community together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizerSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-light-card dark:bg-dark-card border-2 border-light-border dark:border-dark-border p-8 hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 h-full shadow-soft group-hover:shadow-brutal">
                  <div className="w-12 h-12 bg-light-secondary dark:bg-dark-secondary rounded-full flex items-center justify-center mb-6">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl text-light-foreground dark:text-dark-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < organizerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-light-foreground/30 dark:text-dark-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300">
              Start Creating Events
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-6">
              Why Choose{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Eventide?
              </span>
            </h2>
            <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-2xl mx-auto">
              We're more than just an event platform—we're your gateway to meaningful experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-light-card dark:bg-dark-card border-2 border-light-border dark:border-dark-border p-6 hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-soft"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-light-foreground dark:text-dark-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light-muted dark:bg-dark-muted border-2 border-light-border dark:border-dark-border p-12 text-center relative overflow-hidden shadow-soft">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl text-light-foreground dark:text-dark-foreground mb-6">
                Ready to{' '}
                <span className="text-light-secondary dark:text-dark-secondary">
                  Get Started?
                </span>
              </h2>
              
              <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 mb-8 leading-relaxed">
                Join thousands of people who are already discovering and creating 
                meaningful experiences on Eventide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300">
                  Explore Events
                </button>
                <button className="px-8 py-4 bg-light-card dark:bg-dark-card border-2 border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300">
                  Create an Event
                </button>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;