import React from 'react';
import { Search, Calendar, Users, Heart, ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react';

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
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-light-primary/20 dark:bg-dark-primary/20 rounded-handcrafted animate-float"></div>
          <div className="absolute top-1/3 right-20 w-32 h-32 bg-light-secondary/20 dark:bg-dark-secondary/20 rounded-handcrafted animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="mb-12">
            <span className="inline-flex items-center px-6 py-3 bg-light-card dark:bg-dark-card rounded-handcrafted text-lg font-sans text-light-foreground/80 dark:text-dark-foreground/80 border border-light-border dark:border-dark-border shadow-handcrafted">
              <Star className="w-5 h-5 mr-3" />
              How It Works
            </span>
          </div>
          
          <h1 className="font-display font-bold text-6xl md:text-7xl text-light-foreground dark:text-dark-foreground mb-12">
            Your Journey to{' '}
            <span className="text-light-secondary dark:text-dark-secondary">
              Meaningful Connection
            </span>
          </h1>
          
          <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed max-w-4xl mx-auto">
            From discovery to connection, we've designed every step to help you find and create 
            experiences that matter. Here's how Eventide brings people together.
          </p>
        </div>
      </section>

      {/* How It Works - Attendees */}
      <section className="py-32">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-8">
              For Event{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Seekers
              </span>
            </h2>
            <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Four simple steps to transform how you discover and experience events.
            </p>
          </div>
          
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-20 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2 space-y-8">
                  <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-12 shadow-handcrafted">
                    <div className="flex items-center space-x-6 mb-8">
                      <div className="text-7xl font-display font-bold text-light-secondary dark:text-dark-secondary">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center shadow-handcrafted">
                       
                      </div>
                    </div>
                    
                    <h3 className="font-display font-bold text-3xl text-light-foreground dark:text-dark-foreground mb-6">
                      {step.title}
                    </h3>
                    
                    <p className="font-sans text-xl text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed mb-8">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-light-secondary dark:bg-dark-secondary rounded-full"></div>
                          <span className="font-sans text-light-foreground/70 dark:text-dark-foreground/70 text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="aspect-square bg-light-muted dark:bg-dark-muted border-2 border-light-border dark:border-dark-border rounded-handcrafted flex items-center justify-center relative overflow-hidden shadow-brutal">
                      {/* Background Image */}
                      <img
                        src={`https://images.pexels.com/photos/${3822621 + index * 100}/pexels-photo-${3822621 + index * 100}.jpeg`}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                     
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-light-secondary/20 dark:to-dark-secondary/20"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-light-secondary dark:bg-dark-secondary rounded-sketch shadow-handcrafted"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-light-secondary/70 dark:bg-dark-secondary/70 rounded-sketch shadow-handcrafted"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Organizers */}
      <section className="py-32 bg-light-muted/30 dark:bg-dark-muted/30">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-8">
              For Event{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Organizers
              </span>
            </h2>
            <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Create, promote, and manage events that bring your community together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {organizerSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-12 hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 h-full shadow-handcrafted group-hover:shadow-brutal hover:animate-sketch">
                  <div className="w-16 h-16 bg-light-secondary dark:bg-dark-secondary rounded-handcrafted flex items-center justify-center mb-8 shadow-handcrafted">
                    
                  </div>
                  
                  <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-6">
                    {step.title}
                  </h3>
                  
                  <p className="font-sans text-lg text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < organizerSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-10 h-10 text-light-foreground/30 dark:text-dark-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-12 py-5 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 rounded-handcrafted shadow-handcrafted hover:animate-sketch text-xl">
              Start Creating Events
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-8">
              Why Choose{' '}
              <span className="text-light-secondary dark:text-dark-secondary">
                Eventide?
              </span>
            </h2>
            <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 max-w-4xl mx-auto leading-relaxed">
              We're more than just an event platform—we're your gateway to meaningful experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-handcrafted p-10 hover:border-light-secondary dark:hover:border-dark-secondary transition-all duration-300 shadow-handcrafted hover:animate-sketch"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-500 rounded-handcrafted flex items-center justify-center flex-shrink-0 shadow-handcrafted">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-2xl text-light-foreground dark:text-dark-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="font-sans text-lg text-light-foreground/70 dark:text-dark-foreground/70 leading-relaxed">
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
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="bg-light-muted dark:bg-dark-muted border border-light-border dark:border-dark-border rounded-handcrafted p-16 text-center relative overflow-hidden shadow-handcrafted">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-5xl text-light-foreground dark:text-dark-foreground mb-8">
                Ready to{' '}
                <span className="text-light-secondary dark:text-dark-secondary">
                  Get Started?
                </span>
              </h2>
              
              <p className="font-sans text-2xl text-light-foreground/70 dark:text-dark-foreground/70 mb-12 leading-relaxed">
                Join thousands of people who are already discovering and creating 
                meaningful experiences on Eventide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-12 py-5 bg-light-secondary dark:bg-dark-secondary text-white font-sans font-semibold hover:opacity-90 transition-all duration-300 rounded-handcrafted shadow-handcrafted hover:animate-sketch text-xl">
                  Explore Events
                </button>
                <button className="px-12 py-5 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground font-sans font-medium hover:bg-light-muted dark:hover:bg-dark-muted transition-all duration-300 rounded-handcrafted shadow-handcrafted text-xl">
                  Create an Event
                </button>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-handcrafted animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-handcrafted animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;